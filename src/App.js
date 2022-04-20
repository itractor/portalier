import logo from './logo.svg';
import './App.css';
import './Navbar.css';

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
      <main className="Main-Content">
        Put cool financial details here
      </main>
    </div>
  );
}

export default App;
