import * as React from 'react'

import { getRandomColor, getShuffledColorsExcept } from 'utils'

import Header from 'components/Header'
import Container from 'components/Container'
import Start from 'components/Start'
import Step from 'components/Step'
import Score from 'components/Score'
import Color from 'types/Color'

interface IAppState {
    currentStep: number
    score: number
    currentColor: Color
}

class App extends React.Component<{}, IAppState> {

    private readonly steps: number = 10
    private readonly stepSeconds: number = 3

    private robotTimer: number
    private stepTimer: number

    constructor(props: {}) {
        super(props)

        this.state = {
            currentStep: 0,
            score: 0,
            currentColor: getRandomColor(),
        }
    }

    private isGameFinished = (): boolean => this.state.currentStep > this.steps

    private handleRobotMode = () => {
        this.handleNextStep()
        this.robotTimer = window.setInterval(this.handleRobotTimer, 500)
    }

    private handleRobotTimer = () => {
        // check color
        const color = (document.getElementsByClassName('step-title')[0] as HTMLElement).style.color
        // check buttons text
        Array.from(document.getElementsByClassName('color-button')).forEach((el: HTMLElement) => {
            if (el.innerHTML === color) {
                // found correct button
                this.handleNextStep(1)
            }
        })
        if (this.isGameFinished()) {
            window.clearInterval(this.robotTimer)
        }
    }

    private handleNextStep = (scoreToAdd: number = 0) => {
        window.clearTimeout(this.stepTimer)
        this.stepTimer = window.setTimeout(this.handleNextStep, this.stepSeconds * 1000)

        this.setState((prevState) => ({
            currentStep: prevState.currentStep + 1,
            score: prevState.score + scoreToAdd,
            currentColor: getRandomColor()
        }))
    }

    private handleReinitialize = () => {
        this.setState({
            currentStep: 0,
            score: 0,
            currentColor: getRandomColor()
        })
    }

    private renderStart = () => {
        return (
            <Start
                play={this.handleNextStep}
                robotMode={this.handleRobotMode}
            />
        )
    }

    private renderStep = () => {
        const shuffledColors = getShuffledColorsExcept(this.state.currentColor)

        return (
            <Step
                currentColor={this.state.currentColor}
                shuffledColors={shuffledColors}
                nextStep={this.handleNextStep}
                stepSeconds={this.stepSeconds}
            />
        )
    }

    private renderScore = () => {
        const score = `${this.state.score}/${this.steps}`

        return (
            <Score
                reinitialize={this.handleReinitialize}
                score={score}
            />
        )
    }

    private renderGame = () => {
        if (this.state.currentStep === 0) {
            return this.renderStart()
        }

        if (this.state.currentStep > 0 && this.state.currentStep <= this.steps) {
            return this.renderStep()
        }

        if (this.isGameFinished()) {
            return this.renderScore()
        }

        return null
    }

    public render() {
        return (
            <>
                <Header />
                <Container>
                    {this.renderGame()}
                </Container>
            </>
        )
    }
}

export default App
