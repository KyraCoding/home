import React from 'react';
import HeaderLink from './HeaderLink';

function Header() {
    return (
        <div className="w-full px-6 p-3 bg-zinc-800 shadow-md flex items-center">
            <div className="flex w-1/4 justify-start gap-6">
                <HeaderLink title="KyraCod.ing"/>
            </div>
            <div className="flex w-1/2 justify-center gap-6">
                <HeaderLink title="Link 1"/>
                <HeaderLink title="Link 2"/>
                <HeaderLink title="Link 3"/>
            </div>
            <div className="flex w-1/4 justify-end gap-6">
                <HeaderLink title="Sign In" highlightColor='bg-purple-1'/>
                <HeaderLink title="Sign Up"/>
            </div>
        </div>
    )
}
  
export default Header;