import React from 'react';

function SidebarDivider({title}) {
    return (
        <div className="flex bg-black justify-center p-4">
            <div className="flex text-white text-center font-bold text-lg">
                {title}
            </div>
        </div>
    )
}
  
export default SidebarDivider;