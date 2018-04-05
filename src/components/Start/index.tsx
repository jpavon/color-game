import * as React from 'react'

import Button from 'components/Button'

import './style.scss'

interface IStartProps {
    play: () => void
    robotMode: () => void
}

const Start: React.SFC<IStartProps> = ({play, robotMode}) => (
    <div className="start">
        <Button
            className="button-play"
            onClick={() => play()}
        >
            Play
        </Button>
        <Button
            className="button-robot-mode"
            onClick={robotMode}
        >
            Robot Mode
        </Button>
    </div>
)

export default Start
