import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SidebarSegment({ title, link, icon }) {
    return (
        <a href={link} className="flex px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-md transition duration-300">
            <div className="flex space-x-2 items-center">
                {icon && <FontAwesomeIcon fixedWidth size="sm" className="text-black dark:text-white" icon={icon} />}
                <p className="text-black dark:text-white text-center text-base">{title}</p>
            </div>
        </a>
    );
}

export default SidebarSegment;
