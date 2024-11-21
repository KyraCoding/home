export const metadata = {
    title: 'KyraCoding',
    description: "KyraCoding's Personal Site",
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="theme-color" content="#007fff" />
                <meta name="description" content="" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"/>
            </head>
            <body class="bg-white dark:bg-black font-roboto">
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <div id="root" class=""></div>
            </body>
        </html>
    )
}