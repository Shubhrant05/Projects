import React from 'react'
import logo from '../Assets/Logo.png'
import '../Styles/PageStyle.css'
const Header = () => {
    return (
        <div>
            <img className = " mx-auto header" src = {logo} alt="Business Setup" />
        </div>
    )
}

export default Header
