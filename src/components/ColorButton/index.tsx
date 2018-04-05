import * as React from 'react'

import './style.scss'

const ColorButton: React.SFC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...rest}) => {

    return (
        <button
            className="color-button"
            {...rest}
        >
            {children}
        </button>
    )
}

export default ColorButton
