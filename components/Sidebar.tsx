"use client" ;

import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import {HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();
    
     const routes = useMemo(() => [
        {   icon: HiHome,   
            label:'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon:  BiSearch,
            label: 'Search',
            active: pathname ==='/search',
            href: '/search',
        }
     ], [pathname]);

    return (
        <div className="flex h-full">
           <div
            className="
             hidden
             md:flex
             flex-col
             gap-y-2
             bg-white
             h-fullw-[300px]
             p-2
             "
             >
                <Box>
                    Sidebar Navigation
                </Box>
                <Box className = "overflow-y-auto h-full">
                    Songs
                </Box>
                <Box className = "overflow-y-auto h-full">
                    Games
                </Box>
           </div>
        </div>
    );
}

export default Sidebar;