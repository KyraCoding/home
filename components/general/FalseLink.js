import Loader from "./Loader";

export default function FalseStyledLink({ title, url, highlightColor = "bg-azure", underlineThickness = "2px" }) {
    return (
        <Loader href={url}>
            <div className={`relative group text-md inline-flex`}>
                {title}
                <div className={`absolute bottom-0 translate-y-1 bg-gray-600 dark:bg-gray-400 w-full`} style={{ height: underlineThickness }}></div>
                <div className={`${highlightColor} bottom-0 translate-y-1 z-10 absolute w-0 group-hover:w-full transition-all duration-500`} style={{ height: underlineThickness }}></div>
            </div>
        </Loader>
    )
}
