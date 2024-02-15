import "../Cooking/Cooking.css";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export function Layout(properties) {
  return (
    <div className="bodyDiv">
      <nav>
        <h1 className="title">Paldeck</h1>
        <div className="navbarButtons">
          <button>
            <Link to="/">PalDeck</Link>
          </button>
          <button>
            <Link to="/cooking">Cooking</Link>
          </button>
        </div>
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
