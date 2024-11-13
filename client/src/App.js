import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

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
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}
