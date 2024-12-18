import React from 'react';
import SidebarDivider from './SidebarDivider';
import SidebarSegment from './SidebarSegment';
import SidebarSpacer  from './SidebarSpacer';
import SidebarLogin from './SidebarLogin';

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faLaptopCode, faBook, faLink, faImage, faArrowRightArrowLeft, faSliders, faCircleQuestion, faChartSimple } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="hidden lg:flex px-4 py-2 flex-col h-main-content overflow-auto w-1/5 border-r border-gray-400 dark:border-gray-600">
            <SidebarDivider title="Stuff"/>
            <SidebarSegment title="Home" link="/" icon={faHouse}/>
            <SidebarSegment title="About Me" link="/about" icon={faUser}/>
            <SidebarSegment title="Projects" link="/projects" icon={faLaptopCode}/>
            <SidebarSegment title="Guestbook" link="/guestbook" icon={faBook}/>
            <SidebarSpacer />
            <SidebarDivider title="Tools"/>
            <SidebarSegment title="Link Shortener" link="/shorten" icon={faLink}/>
            <SidebarSegment title="Image Hosting" link="/imagehosting" icon={faImage}/>
            <SidebarSegment title="FileDrop" link="/filedrop" icon={faArrowRightArrowLeft}/>
            <SidebarSpacer />
            <SidebarDivider title="More"/> 
            <SidebarSegment title="Preferences" link="/settings" icon={faSliders}/>
            <SidebarSegment title="About This Site" link="/aboutsite" icon={faCircleQuestion}/>
            <SidebarSegment title="Status" link="/status" icon={faChartSimple}/>
            <SidebarLogin/>
        </div>
    )
}
  
export default Sidebar;