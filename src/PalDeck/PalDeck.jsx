import { pals } from "./PalDeckArray";
import "./PalDeck.css";
export function PalDeck() {
  return (
    <div className="PalDeckDiv">
      {pals.map((pal) => (
        <div className="PalContainer" key={pal.number}>
          <div className="PalTitle">
            <h2 className="PalNumber">{pal.number}</h2>
            <h2 className="PalName">{pal.name}</h2>
          </div>
          <div className="PalImageContainer">
            <img src={pal.img} alt={pal.name} className="PalImages" />
            <div className="PalElementContainer">
              <img
                src={pal.elementImg}
                alt={pal.element}
                className="PalElementImg"
              />
              <p className="PalElement">{pal.element}</p>
              <img
                src={pal.elementImg2}
                alt={pal.element2}
                className="PalElementImg"
              />
              <p className="PalElement">{pal.element2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
