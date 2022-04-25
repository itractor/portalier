import {  Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="Sidebar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/toppicks">Top picks</Link>
          </li>
        </ul>
      </aside>
    )
}

export default Sidebar