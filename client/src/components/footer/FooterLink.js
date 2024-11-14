import React from "react";
function FooterLink({ title, url, highlightColor = "bg-azure" }) {
    return (
        <a className="relative group text-md underline underline-offset-[3px]" href={`${url}`}>
            {title}
            <div className={`${highlightColor} absolute h-[3px] w-0 group-hover:w-full transition-all duration-500`}></div>
        </a>
    )
}
export default FooterLink;