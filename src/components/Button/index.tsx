import * as React from 'react'
import * as classNames from 'classnames'

import './style.scss'

const Button: React.SFC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...rest}) => (
    <button
        className={classNames(
            'button',
            className
        )}
        {...rest}
    >
        {children}
    </button>
)

export default Button
