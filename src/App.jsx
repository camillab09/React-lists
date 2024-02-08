import {pals} from "./PalDeckArray/PalDeckArray.jsx"
import './App.css'

const PalDeck = pals.map(pal =>
  <div>
    <h1>(pal.number)</h1>
    <h2>(pal.name)</h2>
    <br></br>
    <img src="pal.img"></img>
    <br></br>
    <p>(pal.element)</p>

  </div>)
function App() {
  return (
    <div>
   {pals}
    </div>
  )
}

export default App
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