'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import { faCircleNotch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) {
        return (
            <div onClick={() => resolvedTheme == "dark" ? setTheme('light') : setTheme("dark")} className="opacity-50 disabled pointer-events-none	flex aspect-square border border-gray-300 dark:border-gray-700 rounded-lg p-2 place-items-center hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300 cursor-pointer">
                <FontAwesomeIcon fixedWidth size="sm" className="text-black dark:text-white" icon={faCircleNotch} spin />
            </div>

        )
    } else if (resolvedTheme == "dark") {
        return (
            <div onClick={() => resolvedTheme == "dark" ? setTheme('light') : setTheme("dark")} className="flex aspect-square border border-gray-300 dark:border-gray-700 rounded-lg p-2 place-items-center hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300 cursor-pointer">
                <FontAwesomeIcon fixedWidth size="sm" className="text-black dark:text-white" icon={faSun} />
            </div>

        )
    } else if (resolvedTheme == "light") {
        return (
            <div onClick={() => resolvedTheme == "dark" ? setTheme('light') : setTheme("dark")} className="flex aspect-square border border-gray-300 dark:border-gray-700 rounded-lg p-2 place-items-center hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300 cursor-pointer">
                <FontAwesomeIcon fixedWidth size="sm" className="text-black dark:text-white" icon={faMoon} />
            </div>
        )
    }
}