import React from 'react'
import './Blog.scss'
import { BiCalendar } from 'react-icons/bi'
import { RiUserFill } from 'react-icons/ri'

function Blog() {
    return (
        <div className='main-blog'>
            <h1>Design Blog</h1>

            <div className="blogs">
                <div className="blog2">
                    <div className="blog2-img">
                        <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/articles/wardrobe_hinged_720x.jpg?v=1627476483" alt="" />
                    </div>

                    <a href="/">5 Reasons to Love Hinged Wardrobe Doors</a>

                    <p>Hinged wardrobe doors are always popular and with good reason. At Pine Tree Lane, we use soft closing, European quality hinges to ensure a great ex...</p>

                    <button>Read More</button>

                    <div className="blog-date">
                        <p> <BiCalendar /> Apr 12, 2022</p>

                        <p> <RiUserFill /> Hozefa Poonawala</p>
                    </div>
                </div>
                <div className="blog1">
                    <div className="blog1-img">
                        <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/articles/kitchen_work_triangle_720x.png?v=1626174280" alt="" />
                    </div>
                    <a href="/">4 Tips To Create The Ultimate Stress-free Kitchen</a>

                    <p>At Pine Tree Lane, we want you to get the most out of your custom kitchen and we start by determining the best possible kitchen layout to suit your...</p>

                    <button>Read More</button>

                    <div className="blog-date">
                        <p> <BiCalendar /> Apr 12, 2022</p>

                        <p> <RiUserFill /> Hozefa Poonawala</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog