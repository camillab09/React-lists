import PalDeck from "./PalDeck/PalDeck.jsx";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="pal-title">Paldex</h1>

      <div className="mainDiv">
        <PalDeck />
      </div>
      <footer>
        <p>
          Palworld is copyright of Pocketpair inc. This page is for
          entertainment purposes only.
          <br /> All images sourced from
          <a href="https://palworld.fandom.com/wiki/Paldeck">Palworld Wiki</a>
        </p>
      </footer>
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
