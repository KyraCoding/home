import React from "react";
import Link from "next/link";

function HeaderLogo() {
    return (
        <Link href="/">
            <div className="group text-md text-black dark:text-white">
                KyraCod<span className="animate-pulse text-azure">.</span>ing
                <div className={`bg-azure h-[3px] w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
        </Link>
    );
}

export default HeaderLogo;
