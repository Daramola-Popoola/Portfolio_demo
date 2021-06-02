import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { SidebarContent } from './Sidebar'
import './styles/style.css';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }
    
    const detectPathName = () => {
        let pageLocation = window.location.pathname;
        return pageLocation
    }
    
    return (
        <>
            
            <div className="">
                <div className="w-14" onClick={toggleSidebar}>
                    <Link to={detectPathName} className="text-4xl md:text-5xl ">
                        <HiOutlineMenuAlt2 />
                    </Link>
                </div>
                    <div className={sidebar ? 'sidebar-items active ': 'sidebar-items'}>
                        <div className="flex bg-green-900 justify-start items-start ">
                            <ul className=" flex flex-col sidebar-menu h-screen justify-center items-center" onClick={toggleSidebar}>
                                <li className="sidebar-toggle  text-4xl font-bold ">
                                    <Link to={detectPathName} className="text-white float-left mr-40 mb-20">
                                        &times;
                                    </Link> 
                                </li>
                                    {SidebarContent.map((item, index) => {
                                       return (
                                         <li key={index} className={item.cName}>
                                           <Link to={item.path}>
                                                <div className="mb-20 mr-20"> {item.title}</div>
                                          </Link>
                                        </li>
                                     )
                                 })}
                             </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Navbar
