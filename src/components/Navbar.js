import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
// import {HiArrowRight} from 'react-icons/hi'
import './styles/style.css';

const Navbar = () => {
    return (
        <>
            <div className=" landing-background h-screen text-white">
                <div className=" p-5 bg-black bg-opacity-70 h-screen">
                    <div className="w-14">
                        <Link to="/" className="text-5xl ">
                            <HiOutlineMenuAlt2 />
                        </Link>
                    </div>
                    
                    <div className="flex justify-start items-start mt-56 ml-24">
                       <div className=" justify-start items-start text-5xl text-white capitalize service-font">
                            Hi!, <br/> i'm John Doe
                        </div>
                        <Link className="absolute bg-gradient-to-br from-green-400 to-green-600 py-3 px-7 rounded animate-bounce text-xl mt-32" to="/">
                             Discover{/*r<HiArrowRight /> */}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
