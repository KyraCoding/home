import React from 'react';

function SidebarDivider({title}) {
    return (
        <div className="flex px-4 py-2">
            <div className="flex font-bold text-black dark:text-white text-lg">
                {title}
            </div>
        </div>
    )
}
  
export default SidebarDivider;