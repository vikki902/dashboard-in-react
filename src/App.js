import './App.css';
import Announcement from './components/Announcement.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     {/* <Announcement/> */}
    </div>
  );
}

export default App;
