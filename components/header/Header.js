import HeaderLogo from './HeaderLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeToggle from '../general/ThemeToggle';

function Header() {
    return (
        <div className="h-header-height bg-white dark:bg-black w-full px-6 p-1  flex items-center justify-between border-b border-gray-400 dark:border-gray-600">
            <div className="flex items-center">
                <FontAwesomeIcon fixedWidth size="sm" className="cursor-pointer flex lg:hidden text-black dark:text-white pr-4" icon="fa-solid fa-bars" />
                <HeaderLogo />
            </div>
            <ThemeToggle />
        </div>
    )
}

export default Header;