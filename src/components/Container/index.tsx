import * as React from 'react'

import './style.scss'

const Container: React.SFC = ({children}) => {

    return (
        <div
            className="container"
        >
            {children}
        </div>
    )
}

export default Container
