import Link from "next/link"
import Loader from "@/components/general/Loader"

export default function StyledLink({ title, url, highlightColor = "bg-azure", underlineThickness = "2px" }) {
    return (
        <Loader href={url}>
            <Link className={`relative group text-md`} href={`${url}`}>
                {title}
                <div className={`absolute bg-gray-600 dark:bg-gray-400 w-full`} style={{ height: underlineThickness }}></div>
                <div className={`${highlightColor} z-10 absolute w-0 group-hover:w-full transition-all duration-500`} style={{ height: underlineThickness }}></div>
            </Link>
        </Loader>
    )
}
