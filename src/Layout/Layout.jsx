import "../Cooking/Cooking.css";
import { Link, Outlet } from "react-router-dom";

export function Layout(properties) {
  return (
    <div>
      <nav>
        <h1 className="pal-title">Paldeck</h1>
        <ul>
          <li>
            <Link to="/">PalDeck</Link>
          </li>
          <li>
            <Link to="/cooking">Cooking</Link>
          </li>
        </ul>
      </nav>

      <div className="mainDiv">
        {properties.children}
        <Outlet />
      </div>
      <footer>
        <p>
          Palworld is copyright of Pocketpair inc. This page is for
          entertainment purposes only.
          <br /> All images sourced from
          <a href="https://palworld.fandom.com/wiki/Paldeck">Palworld Wiki</a>
        </p>
      </footer>
    </div>
  );
}
