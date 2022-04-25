import './App.css';
import './Navbar.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './navigation/Sidebar';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
