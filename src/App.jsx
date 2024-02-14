import { PalDeck } from "./PalDeck/PalDeck.jsx";
import { Layout } from "./Layout/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeBook } from "./Cooking/Cooking.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PalDeck />} />
          <Route path="cooking" element={<RecipeBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
