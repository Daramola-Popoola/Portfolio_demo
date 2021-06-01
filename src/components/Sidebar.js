import React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {HiOutlineNewspaper} from 'react-icons/hi'

export const SidebarContent = [
    {
        title: 'Home',
        icon: <AiOutlineHome />,
        cName: 'text-white text-2xl service-font px-20 text-opacity-70 hover:text-opacity-100 mt-10',
        path: '/'
    },
    {
        title: 'About',
        icon: <HiOutlineNewspaper />,
        cName: 'text-white mt-5 text-2xl service-font px-20  text-opacity-70 hover:text-opacity-100',
        path: '/about'
    },
    {
        title: 'Contact',
        icon: <BiPhoneCall />,
        cName: 'text-white mt-5 text-2xl service-font px-20  text-opacity-70 hover:text-opacity-100',
        path: '/contact'
    }
]