import React from 'react'
import './Our.scss'
function Our() {
    return (
        <div className='main-our'>
            <h1>Our Kitchen Styles</h1>

            <div className="our-cards">
                <div className="our-card">
                    <div className="our-img">
                        <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/craftedkitchen2_large.jpg?v=1618289936" alt="" />
                    </div>

                    <p>CHIC</p>
                </div>
                <div className="our-card">
                    <div className="our-img">
                        <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/classic1_large.jpg?v=1618289933" alt="" />
                    </div>

                    <p>CLASSIC</p>
                </div>
                <div className="our-card">
                    <div className="our-img">
                        <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/contemporarycollection4_large.jpg?v=1618289931" alt="" />
                    </div>

                    <p>CONTEMPORARY</p>
                </div>
                <div className="our-card">
                    <div className="our-img">
                        <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/products/Scandikitchen1_large.jpg?v=1618289937" alt="" />
                    </div>

                    <p>SCANDI</p>
                </div>
            </div>
        </div>
    )
}

export default Our