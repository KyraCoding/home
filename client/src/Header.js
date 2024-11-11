import React from 'react';
import HeaderLink from './HeaderLink';
import HeaderLogo from './HeaderLogo';

function Header() {
    return (
        <div className="w-full px-6 p-3 flex items-center justify-between border-b border-gray-600">
            <div className="flex">
                <HeaderLogo />
            </div>
            <div className="flex">
                <HeaderLink title="Login" highlightColor='bg-purple-1'/>
            </div>
        </div>
    )
}
  
export default Header;