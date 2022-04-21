import './App.css';
import MainContent from './content/MainContent';
import './Navbar.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <aside className="Sidebar">
        <ul>
          <li>
            Home
          </li>
          <li>
            My portfolio
          </li>
          <li>
            Search Stocks
          </li>
          <li>
            About
          </li>
        </ul>
      </aside>
      <MainContent />
    </div>
  );
}

export default App;
