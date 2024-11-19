import React from 'react';
import SidebarDivider from './SidebarDivider';
import SidebarSegment from './SidebarSegment';
import SidebarSpacer  from './SidebarSpacer';

function Sidebar() {
    return (
        <div className="hidden lg:flex px-4 py-2 flex-col h-main-content overflow-auto w-1/5 border-r border-gray-400 dark:border-gray-600">
            <SidebarDivider title="Stuff"/>
            <SidebarSegment title="Home" link="/" icon='fa-solid fa-house'/>
            <SidebarSegment title="About Me" link="/about" icon='fa-solid fa-user'/>
            <SidebarSegment title="Projects" link="/projects" icon='fa-solid fa-laptop-code'/>
            <SidebarSegment title="Guestbook" link="/guestbook" icon='fa-solid fa-book'/>
            <SidebarSpacer />
            <SidebarDivider title="Tools"/>
            <SidebarSegment title="Link Shortener" link="/shorten" icon='fa-solid fa-link'/>
            <SidebarSegment title="Image Hosting" link="/imagehosting" icon='fa-solid fa-image'/>
            <SidebarSegment title="FileDrop" link="/filedrop" icon='fa-solid fa-arrow-right-arrow-left'/>
            <SidebarSpacer />
            <SidebarDivider title="More"/> 
            <SidebarSegment title="Preferences" link="/settings" icon='fa-solid fa-sliders'/>
            <SidebarSegment title="About This Site" link="/aboutsite" icon='fa-solid fa-circle-question'/>
            <SidebarSegment title="Status" link="/status" icon='fa-solid fa-chart-simple'/>
        </div>
    )
}
  
export default Sidebar;