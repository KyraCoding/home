import React from "react";
function HeaderLink({ title, highlightColor = "bg-azure" }) {
    return (
        <a className="group text-md text-black dark:text-white" href="/">
            {title}
            <div className={`${highlightColor} h-[3px] w-0 group-hover:w-full transition-all duration-500`}></div>
        </a>
    )
}
export default HeaderLink;