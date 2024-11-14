import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { DarkModeProvider, useDarkMode } from './components/context/DarkModeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  const { isDark } = useDarkMode();
  return (
    <div className={`flex h-full min-h-screen flex-col ${isDark ? 'dark' : ''}`}>
      <Header />
      <div className="flex flex-row grow bg-white/90 dark:bg-black/90">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
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
