import React from 'react'
import "./Projects.scss"
import { BiCalendar } from 'react-icons/bi'
import { RiUserFill } from 'react-icons/ri'


function Projects() {
    return (
        <div className='main-proj'>
            <h1>Our Projects</h1>

            <div className="projs">
                <div className="project1">
                    <div className="project1-img">
                        <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/articles/mudon_kitchen_3_900x.jpg?v=1651143585" alt="" />
                    </div>
                    <a href="/">Mudon Custom Kitchen</a>

                    <button>Read More</button>

                    <div className="date">
                        <p> <BiCalendar /> Apr 12, 2022</p>

                        <p> <RiUserFill /> Hozefa Poonawala</p>
                    </div>
                </div>
                <div className="project2">
                    <div className="project2-img">
                        <img src="https://cdn.shopify.com/s/files/1/0492/8988/7900/articles/Screenshot_2022-04-12_120934_720x.png?v=1649751003" alt="" />
                    </div>

                    <a href="/">Alvorada Custom Laundry Room</a>

                    <button>Read More</button>

                    <div className="date">
                        <p> <BiCalendar /> Apr 12, 2022</p>

                        <p> <RiUserFill /> Hozefa Poonawala</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects