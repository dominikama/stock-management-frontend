import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Sidebar from './components/SideBar.js';
import WarehouseCreationToggle from './components/warehouse/toggles/WarehouseCreationToggle.js';




function App() {
  return (
    <div className="App">
          <Navbar />
          <Section />
    </div>
  );
}

export default App;
