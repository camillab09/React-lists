import "../App.css";

export function Layout(properties) {
  return (
    <div>
      <nav>
        <h1 className="pal-title">Paldeck</h1>
      </nav>

      <div className="mainDiv">{properties.children}</div>
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
