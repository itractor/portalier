import './App.css';
import MainContent from './content/MainContent';
import './Navbar.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './navigation/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './content/About';


function App() {
  return (

      <Router>
        <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="search" element={<MainContent />} />
          <Route path="about" element={<About />} />
        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
