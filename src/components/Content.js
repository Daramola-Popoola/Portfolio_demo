import React from 'react'
import { Link } from 'react-router-dom';
import './styles/style.css';
import Navbar from './Navbar'

const Content = () => {
    return (
        <>
            <div className=" landing-background h-screen text-white">
                <div className=" p-5 bg-black bg-opacity-70 h-screen">
                    <div className="w-14">
                        <Navbar/>
                    </div>
                    
                    <div className="flex flex-col justify-start items-start mt-56 ml-3 md:ml-24">
                       <div className=" justify-start items-start text-white capitalize landing-text service-font text-3xl md:text-5xl">
                            Hi!, <br/> i'm Popoola Daramola
                        </div>
                        <div className="animate-bounce mt-16 relative">
                            <Link className=" bg-gradient-to-br from-green-400 to-green-600 py-3 px-7 rounded text-xl " to="/about">
                                 Discover
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
