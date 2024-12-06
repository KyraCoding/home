import '@/styles/globals.css';

// Import fonts
import { Roboto_Mono } from 'next/font/google'
const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: "swap"
});

// Import themes
import { ThemeProvider } from "next-themes"

// Import pages
import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';

// Font Awesome setup
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className={`flex h-screen flex-col ${robotoMono.variable} font-roboto`}>
        <Header />
        <div className="flex flex-row h-main-content bg-white/90 dark:bg-black/90">
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
