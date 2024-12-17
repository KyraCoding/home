import '@/styles/globals.css';
import ClientTheme from './ClientTheme';
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';

// Import fonts
import { Roboto_Mono } from 'next/font/google'
const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: "swap"
});

// Font Awesome setup
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// Auth
import { auth } from '@/auth'
import { AuthProvider } from '@/AuthProvider'


export const metadata = {
    title: {
        template: '%s - KyraCoding',
        default: 'KyraCoding',
    },
    description: "KyraCoding's personal website, portfolio and projects.",
    manifest: "/manifest.json",
    icons: {
        favicon: "/favicon.ico",
        appleTouchIcon: "@/styles/public/logo192.png",
    }
}

export const viewport = {
    themeColor: "#007fff",
}

export default async function RootLayout({ children }) {
    const session = await auth()
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <AuthProvider session={session}>
                    <ClientTheme>
                        <div className={`flex h-screen flex-col ${robotoMono.variable} font-roboto`}>
                            <Header />
                            <div className="flex flex-row h-main-content bg-white/90 dark:bg-black/90">
                                <Sidebar />
                                {children}
                            </div>
                        </div>
                    </ClientTheme>
                </AuthProvider>
            </body>
        </html>
    )
}