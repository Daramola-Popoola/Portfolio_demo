import React from 'react'
import Navbar from '../components/Navbar'
import '../components/styles/style.css'
import Logo1 from '../images/logo1.png'
import Logo2 from '../images/logo2.png'
import Logo3 from '../images/logo3.png'
import Logo4 from '../images/logo4.png'
import Logo5 from '../images/logo5.png'
import Logo6 from '../images/logo6.png'
import Logo7 from '../images/logo7.png'

const About = () => {
    return (
        <>
            <div className="bg-gray-50">
            
                <div className="parallax flex justify-start items-start text-white text-3xl pt-16 pl-20 pb-16 service-font md:text-6xl">
                   
                    <div className="flex  float-right justify-start items-start w-2/4 ">
                        About Me
                    </div>
                    <div className=" flex justify-end items-end w-2/4">
                        <div className="w-14 float-right mr-0 md:mr-20">
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center px-10 mt-10 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat<br/>
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 
                </div>
            </div>
            <div className="flex flex-col py-10">
                <div className="sectional-caption-text service-font md:text-5xl">
                    Stack
                </div>
                <div className="mr-20 md:mr-0">
                    <div className="flex flex-col justify-center items-center mt-36 md:flex-row">
                        <div className="flex flex-col md:flex-row">
                            <a href="https://www.mongodb.com/" rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center text-gray-600 ml-20">
                                    <img src={Logo1} alt="logo1" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                                    MongoDB
                            </a>
                            <a href="https://expressjs.com/" rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center text-gray-600 ml-20 mt-20 md:mt-0">
                                    <img src={Logo2} alt="logo2" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                                    Express
                            </a>
                        </div>
                        
                        <div className="flex flex-col md:flex-row mt-20 md:mt-0">
                        <a href="https://reactjs.org/" rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center text-gray-600 ml-20 ">
                                <img src={Logo3} alt="logo3" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                                React JS
                        </a>
                        <a href="https://nodejs.org/" rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center text-gray-600 ml-20 mt-20 md:mt-0">
                                <img src={Logo4} alt="logo4" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                                Node
                        </a>
                        </div>
                        
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-24">
                        
                        <a href="https://flutter.dev/" rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center text-gray-600 ml-16 ">
                                <img src={Logo5} alt="logo5" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                                Flutter
                        </a>
                        <a href="https://www.xclaimlabs.com/" rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center text-gray-600 ml-16 mt-20 md:mt-0">
                                <img src={Logo6} alt="logo7" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                                JavaScript
                        </a>
                        <a href="https://sailsjs.com/" rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center text-gray-600 ml-16 mt-20 md:mt-0">
                                <img src={Logo7} alt="logo7" className="rounded-full h-24 animate-bounce shadow-2xl"/>
                                Sails
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50">
                <div className="sectional-caption-text service-font">
                    Works
                </div>
                <div className="flex flex-col justify-center items-center mt-12 py-10 md:flex-row ">
                    <div className="works-panes">
                        Website 1
                    </div>
                    <div className="works-panes mt-20 md:mt-0">
                        Website 2
                    </div>
                    <div className="works-panes  mt-20 md:mt-0">
                        Website 3
                    </div>
                </div>
            </div>
        </>
    )
}

export default About