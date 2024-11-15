import React from "react";
function Link({ title, url, highlightColor = "bg-azure",  underlineThickness="2px" }) {
    return (
        <a className={`relative group text-md `} href={`${url}`}>
            {title}
            <div className={`absolute bg-gray-600 dark:bg-gray-400 w-full`} style={{ height: underlineThickness }}></div>
            <div className={`${highlightColor} z-10 absolute w-0 group-hover:w-full transition-all duration-500`} style={{ height: underlineThickness }}></div>
        </a>
    )
}
export default Link;