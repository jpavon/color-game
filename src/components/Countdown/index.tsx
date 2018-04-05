import * as React from 'react'

import './style.scss'

interface ICountdownProps {
    seconds: number
}

interface ICountdownState {
    seconds: number
}

class Countdown extends React.Component<ICountdownProps, ICountdownState> {

    private readonly tickSeconds: number = .1
    private timer: number

    constructor(props: ICountdownProps) {
        super(props)

        this.state = {
            seconds: props.seconds
        }
    }

    public componentDidMount() {
        this.timer = window.setInterval(this.tick, this.tickSeconds * 1000)
        this.setState({
            seconds: this.props.seconds
        })
    }

    public componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    private tick = () => {
        this.setState((prevState) => ({
            seconds: prevState.seconds - this.tickSeconds
        }))
    }

    public render() {
        const seconds = this.state.seconds.toFixed(1)

        return (
            <div className="countdown">
                {seconds}
            </div>
        )
    }
}

export default Countdown
