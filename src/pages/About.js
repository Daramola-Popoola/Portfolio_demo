import React from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/style.css'
import Logo1 from '../images/logo1.png'
import Logo2 from '../images/logo2.png'
import Logo3 from '../images/logo3.png'
import Logo4 from '../images/logo4.png'
import Logo5 from '../images/lara.png'
import Logo6 from '../images/logo6.png'
import Logo7 from '../images/logo7.png'

const About = () => {
    return (
        <>
            <div className="bg-gray-50">
                <div className="parallax flex justify-start items-start text-white text-6xl pt-16 pl-20 pb-16 service-font">
                    About
                </div>
                <div className="flex justify-center items-center px-10 mt-10 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/>
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 
                </div>
            </div>
            <div className="">
                <div className="flex justify-start items-start text-5xl text-gray-600 pt-16 pl-10 h-20 service-font">
                    Technologies
                </div>
                <div className="flex justify-center items-center mt-36">
                    <Link to="/" className="flex flex-col justify-center items-center text-gray-600 ml-20">
                            <img src={Logo1} alt="logo1" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                            MongoDB
                    </Link>
                    <Link to="/" className="flex flex-col justify-center items-center text-gray-600 ml-20">
                            <img src={Logo2} alt="logo2" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                            Express
                    </Link>
                    <Link to="/" className="flex flex-col justify-center items-center text-gray-600 ml-20">
                            <img src={Logo3} alt="logo3" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                            React JS
                    </Link>
                    <Link to="/" className="flex flex-col justify-center items-center text-gray-600 ml-20">
                            <img src={Logo4} alt="logo4" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                            Node
                    </Link>
                </div>
                <div className="flex justify-center items-center mt-24">
                    <Link to="/" className="flex flex-col justify-center items-center text-gray-600 ml-16">
                            <img src={Logo5} alt="logo5" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                            Flutter
                    </Link>
                    <Link to="/" className="flex flex-col justify-center items-center text-gray-600 ml-16">
                            <img src={Logo6} alt="logo7" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                            JavaScript
                    </Link>
                    <Link to="/" className="flex flex-col justify-center items-center text-gray-600 ml-16">
                            <img src={Logo7} alt="logo7" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                            Sails
                    </Link>
                </div>
            </div>
        </>
    )
}

export default About
