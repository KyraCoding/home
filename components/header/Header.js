import React from 'react';
import HeaderLogo from './HeaderLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from "next-themes";

function Header() {
    const {theme, setTheme } = useTheme();
    return (
        <div className="h-header-height bg-white dark:bg-black w-full px-6 p-1  flex items-center justify-between border-b border-gray-400 dark:border-gray-600">
            <div className="flex items-center">
                <FontAwesomeIcon fixedWidth size="sm" className="cursor-pointer flex lg:hidden text-black dark:text-white pr-4" icon="fa-solid fa-bars" />
                <HeaderLogo />
            </div>
            <div onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} className="flex aspect-square border border-gray-300 dark:border-gray-700 rounded-lg p-2 place-items-center hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300 cursor-pointer">
                <FontAwesomeIcon fixedWidth size="sm" className="text-black dark:text-white" icon={theme ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} />
            </div>
        </div>
    )
}

export default Header;