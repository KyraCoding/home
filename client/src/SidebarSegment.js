import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SidebarSegment({ title, link, icon }) {
    return (
        <div className="flex h-8 bg-black hover:bg-gray-600">
            <div className="flex items-center space-x-2">
                {icon && <FontAwesomeIcon icon={icon} />}  
                <a href={link} className="text-white text-center">{title}</a>
            </div>
        </div>
    );
}

export default SidebarSegment;
