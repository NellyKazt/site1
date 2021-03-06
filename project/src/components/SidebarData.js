import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Pizza',
        path: '/pizza',
        icon: <IoIcons.IoIosPizza/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <BsIcons.BsPeople/>,
        cName: 'nav-text'
    }
]