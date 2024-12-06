import StyledLink from '../general/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <footer className="w-full sticky top-[100vh]">
            <div className="flex flex-col text-gray-600 dark:text-gray-400 text-xs pl-6 p-3">
                <span className="inline-flex items-center">
                    <FontAwesomeIcon fixedWidth size="xs" className='pr-1' icon={faCopyright}/>
                    {new Date().getFullYear()} KyraCoding (Kyra) -&nbsp;
                    <StyledLink title="Licensed under CC BY-NC-ND 4.0" url="/license" underlineThickness='1px'/>
                    <span className="pl-2 gap-2 flex">
                        <StyledLink title="TOS" url="/tos" underlineThickness='1px' />
                        <StyledLink title="Privacy" url="/privacy" underlineThickness='1px'/>
                        <StyledLink title="Cookies" url="/cookies" underlineThickness='1px'/>
                    </span>
                </span>
            </div>
        </footer>
    );
}

export default Footer;