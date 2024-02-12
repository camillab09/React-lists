import { pals } from "./PalDeckArray/PalDeckArray.jsx";

import "./App.css";

const PalDeck = () => (
  <div className="PalDeckDiv">
    {pals.map((pal) => (
      <div className="PalContainer" key={pal.number}>
        <div className="PalTitle">
          <h2 className="PalNumber">{pal.number}</h2>
          <h2 className="PalName">{pal.name}</h2>
        </div>
        <img src={pal.img} alt={pal.name} className="PalImages" />
        <p className="PalElement">{pal.element}</p>
      </div>
    ))}
  </div>
);

function App() {
  return (
    <>
      <h1 className="pal-title">Paldex</h1>

      <div className="mainDiv">
        <PalDeck />
      </div>
    </>
  );
}

export default App;

/*funksjon.map((value) =>{
lager et nytt element for hver verdi i arrayet
}) */

/**
 * Sette opp flere sider:
 * $ npm install react-router-dom
 * sette opp en mappe for pages
 * pages>HomePage.jsx
 * (export function HomePage(){
 * return
 * (
 * <main>
 * Home
 * </main>
 * )})
 * pages>contact.jsx
 * (export function Contact(){
 * return(
 * <content>
 * Contact
 * </content>
 * )})
 * pages>rootLayout.jsx
 * (import {outlet, Link, NavLink} from "react-router-dom"
 * export function layout(){
 * return(
 *<nav>
 <li><Link to="/">Home</Link></li>
 <li><Link to="/contact">Contact</Link></li></nav>)
 * })
 * app.jsx
 * (import {BrowserRouter, Routes, Route} from 'react-router-dom
 * function App()){
 * return(
 * <BrowserData>
 * <Routes>
 * <Route path='/' element={<HomePage/>}/> ('/) er defaultsiden)
 * <Route path='/contact' element={<Contact/>}/>
 * </Routes>
 * </BrowserData>)}
 */
