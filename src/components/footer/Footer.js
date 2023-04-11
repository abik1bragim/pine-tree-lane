import React from 'react'
import './Footer.scss'

import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { TfiYoutube } from 'react-icons/tfi'
function Footer() {
    return (
        <div className='main-footer'>
            <div className="Webs">
                <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/files/footer-logo.png?v=1614310321" alt="" />

                <div className="web">
                    <ul>
                        <li>
                            <a href="/"><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href="/"><FaInstagram /></a>
                        </li>
                        <li>
                            <a href="/"><TfiYoutube /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer">
                <div className="footer-top">
                    <div className="shop">
                        <h3> <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/files/footer-icon1.png?v=1614310315" alt="" /> SHOP THE COLLECTION</h3>

                        <ul>
                            <li>
                                <a href="/">Sofas</a>
                            </li>
                            <li>
                                <a href="/">Chairs</a>
                            </li>
                            <li>
                                <a href="/">Tables</a>
                            </li>
                            <li>
                                <a href="/">Cabinets</a>
                            </li>
                            <li>
                                <a href="/">Kitchens</a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop">
                        <h3> <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/files/footer-icon3.png?v=1614310322" alt="" /> DESIGN YOUR STYLE</h3>

                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">What we do?</a>
                            </li>
                            <li>
                                <a href="/">Our values</a>
                            </li>
                            <li>
                                <a href="/">Our promise</a>
                            </li>
                            <li>
                                <a href="/">Our showroom</a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop">
                        <h3> <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/files/footer-icon5.png?v=1614310323" alt="" /> DESIGNERS & ARCHITECTS</h3>

                        <ul>
                            <li>
                                <a href="/">How it works?</a>
                            </li>
                            <li>
                                <a href="/">Why collaborate with us?</a>
                            </li>
                            <li>
                                <a href="/">Our projects</a>
                            </li>
                            <li>
                                <a href="/">Meet for a coffee</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="shop">
                        <h3> <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/files/footer-icon2.png?v=1614310315" alt="" /> CUSTOMER CARE</h3>

                        <ul>
                            <li>
                                <a href="/">Terms of service</a>
                            </li>
                            <li>
                                <a href="/">Privacy policy</a>
                            </li>
                            <li>
                                <a href="/">Shipping policy</a>
                            </li>
                            <li>
                                <a href="/">Refund policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop">
                        <h3> <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/files/footer-icon4.png?v=1614310323" alt="" /> ADDRESS</h3>

                        <ul>
                            <li>
                                <a href="/">Plot 598-1132</a>
                            </li>
                            <li>
                                <a href="/">Dubai Investments Park-1</a>
                            </li>
                            <li>
                                <a href="/">P O Box 3316</a>
                            </li>
                            <li>
                                <a href="/">Dubai, UAE</a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop">
                        <h3> <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/files/footer-icon6.png?v=1614310323" alt="" /> SWING BY TO SAY HI</h3>

                        <ul>
                            <li>
                                <a href="/">+971 4 8100 444</a>
                            </li>
                            <li>
                                <a href="/">Open 9am - 6pm</a>
                            </li>
                            <li>
                                <a href="/">Saturday to Thursday</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer