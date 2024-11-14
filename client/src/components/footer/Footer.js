import React from 'react';
import FooterLink from './FooterLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <footer className="w-full sticky top-[100vh]">
            <div className="flex flex-col text-gray-600 dark:text-gray-400 text-xs pl-6 p-3">
                <span className="inline-flex items-center">
                    <FontAwesomeIcon fixedWidth size="xs" className='pr-1' icon={faCopyright}/>
                    {new Date().getFullYear()} KyraCoding (Kyra) - All rights reserved.
                    <span className="pl-2 gap-2 flex">
                        <FooterLink title="TOS" url="/tos" />
                        <FooterLink title="Privacy" url="/privacy" />
                        <FooterLink title="Cookies" url="/cookies" />
                    </span>
                </span>
            </div>
        </footer>
    );
}

export default Footer;