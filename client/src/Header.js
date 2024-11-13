import React from 'react';
import HeaderLogo from './HeaderLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDarkMode } from './DarkModeContext';

function Header() {
    const { isDark, toggleDarkMode } = useDarkMode();
    return (
        <div className="bg-white dark:bg-black w-full px-6 p-3 flex items-center justify-between border-b border-gray-400 dark:border-gray-600">
            <div className="flex">
                <HeaderLogo />
            </div>
            <div onClick={toggleDarkMode} className="flex aspect-square border rounded-lg p-2 place-items-center hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300 cursor-pointer">
                <FontAwesomeIcon fixedWidth size="sm" className="text-black dark:text-white" icon={isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} />
            </div>
        </div>
    )
}

export default Header;