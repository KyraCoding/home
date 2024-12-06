import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
    title: {
        template: '%s - KyraCoding',
        default: 'KyraCoding',
    },
    description: "Oliver (Kyra) Leung's personal website, portfolio and projects.",
    manifest: "/manifest.json",
    icons: {
        favicon: "/favicon.ico",
        appleTouchIcon: "/logo192.png",
    }
}
export const viewport = {
    themeColor: "#007fff",
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`bg-white dark:bg-black`}>
                {children}
            </body>
        </html>
    )
}