import * as React from 'react'
import { shuffle } from 'lodash'

import Color from 'types/Color'
import ColorButton from 'components/ColorButton'
import Countdown from 'components/Countdown'

import './style.scss'

interface IStepProps {
    currentColor: Color
    shuffledColors: Color[]
    nextStep: (scoreToAdd: number) => void
    stepSeconds: number
}

const Step: React.SFC<IStepProps> = ({currentColor, nextStep, shuffledColors, stepSeconds}) => {
    const options = [
        // correct option
        { text: currentColor, borderColor: shuffledColors[0] },
        // wrong option
        { text: shuffledColors[0], borderColor: shuffledColors[1] }
    ]

    const shuffledOptions = shuffle(options.map(({text, borderColor}, index) => (
        <ColorButton
            key={index}
            onClick={() => nextStep(text === currentColor ? 1 : 0)}
            style={{
                borderColor
            }}
        >
            {text}
        </ColorButton>
    )))

    const CountdownRerenderer = () => (<Countdown seconds={stepSeconds} />)

    return (
        <div className="step">
            <div
                className="step-title"
                style={{
                    color: currentColor
                }}
            >
                {shuffledColors[0]}
            </div>
            <CountdownRerenderer />
            <div className="step-options">
                <div className="step-options-title">Choose one:</div>
                <div className="step-options-buttons">
                    {shuffledOptions}
                </div>
            </div>
        </div>
    )
}

export default Step
