import React from 'react'

import './NavbarMedia.scss'
import "./Navbar.scss"
import NavLogo from '../../images/nav-logo.png'
import { HiPhone, HiSearch } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
function Navbar() {
    return (
        <div className='nav-main'>
            <div className="nav-top">
                <a href="https://pinetreelane.com/pages/design-studio">Are you an interior designer or architect looking to collaborate?</a>
            </div>

            <nav>
                <div className="nav-logo">
                    <a href="/">
                        <img src={ NavLogo } alt="" />
                    </a>
                </div>

                <div className="nav-email">
                    <ul className='nav-ul'>
                        <li>
                            <a href="https://pinetreelane.com/blogs/news">Desing blog</a>
                        </li>
                        <li>
                            <a href="https://pinetreelane.com/blogs/events">Events</a>
                        </li>
                    </ul>
                    <div className="header-contact">
                        <ul>
                            <li>
                                <a href="tel:+998 94 905 92 42">
                                    <span><HiPhone /></span>
                                    +998 94 905 92 42
                                </a>

                            </li>
                            <li>
                                <a href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app">
                                    <span><MdEmail /></span>
                                    azimjonibragimo20@.gmail.com
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="nav-bot">
                <ul>
                    <li>
                        <a href="/">KITCHENS</a>
                    </li>
                    <li>
                        <a href="/">WARDROBES</a>
                    </li>
                    <li>
                        <a href="/">ABOUT US</a>
                    </li>
                    <li>
                        <a href="/">PROJECTS</a>
                    </li>
                    <li>
                        <a href="/">SHOP</a>
                    </li>
                </ul>

                <div className="bot-r">
                    <ul>
                        <li>
                            <a href="/"><FaShoppingCart /></a>
                        </li>
                        <li>
                            <a href="/"><FaUser /></a>
                        </li>
                        <li>
                            <a href="/"><HiSearch /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar