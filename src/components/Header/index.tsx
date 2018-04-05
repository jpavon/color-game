import * as React from 'react'

import './style.scss'

const Header: React.SFC = () => (
    <div className="header">
        <img
            className="header-logo"
            src="https://careers.adidas-group.com/images/external/adidas-company-dark.svg"
            alt="Logo"
        />
        <div className="header-title">Color Game</div>
    </div>
)

export default Header
