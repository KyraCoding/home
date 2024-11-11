import React from 'react';
import SidebarDivider from './SidebarDivider';
import SidebarSegment from './SidebarSegment';

function Sidebar() {
    return (
        <div className="flex flex-col h-overflow-auto w-1/5 border-r border-gray-600">
            <SidebarDivider title="Stuff"/>
            <SidebarSegment title="Home" link="/" icon='fa-solid fa-house'/>
        </div>
    )
}
  
export default Sidebar;