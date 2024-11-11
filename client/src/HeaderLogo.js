import React from "react";
function HeaderLogo() {
    return (
        <a className="group text-md text-white" href="/">
            KyraCod<span className="animate-pulse">.</span>ing
            <div className={`bg-azure h-[3px] w-0 group-hover:w-full transition-all duration-500`}></div>
        </a>
    )
}
export default HeaderLogo;