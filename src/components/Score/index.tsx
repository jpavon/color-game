import * as React from 'react'

import Button from 'components/Button'

import './style.scss'

interface IScoreProps {
    score: string
    reinitialize: () => void
}

const Score: React.SFC<IScoreProps> = ({score, reinitialize}) => (
    <div className="score">
        <div className="score-title">
            Your final score is: {score}
        </div>

        <Button onClick={reinitialize}>
            Play Again
        </Button>
    </div>
)

export default Score
