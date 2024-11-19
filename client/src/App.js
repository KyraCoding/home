import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { DarkModeProvider, useDarkMode } from './components/context/DarkModeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import UnderConstruction from './pages/UnderConstruction';

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  const { isDark } = useDarkMode();
  return (
    <div className={`flex h-screen flex-col ${isDark ? 'dark' : ''}`}>
      <Header />
      <div className="flex flex-row h-main-content bg-white/90 dark:bg-black/90">
        <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<UnderConstruction />} />
            <Route path="/projects" element={<UnderConstruction />} />
            <Route path="/guestbook" element={<UnderConstruction />} />
            <Route path="/shorten" element={<UnderConstruction />} />
            <Route path="/imagehosting" element={<UnderConstruction />} />
            <Route path="/filedrop" element={<UnderConstruction />} />
            <Route path="/settings" element={<UnderConstruction />} />
            <Route path="/aboutsite" element={<UnderConstruction />} />
            <Route path="/status" element={<UnderConstruction />} />
            <Route path="/tos" element={<UnderConstruction />} />
            <Route path="/privacy" element={<UnderConstruction />} />
            <Route path="/cookies" element={<UnderConstruction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  );
}
