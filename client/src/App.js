import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse)


function App() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <div className="flex flex-row grow ">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
