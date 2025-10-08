import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main/Main";
import Home from "./layouts/pages/Home/Home";
import Birulevo from "./layouts/pages/Birulevo/Birulevo";
import MenuBir from "./components/MenuBir/MenuBir";
import RulesBir from "./components/RulesBir/RulesBir";
import Taganka from "./layouts/pages/Taganka/Taganka";
import MenuTag from "./components/MenuTag/MenuTag";
import RulesTag from "./components/RulesTag/RulesTag";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/birulevo" element={<Birulevo />} />
            <Route path="/taganka" element={<Taganka />} />
            <Route path="/birulevo/menu" element={<MenuBir />} />
            <Route path="/birulevo/rules" element={<RulesBir />} />
            <Route path="/taganka/menu" element={<MenuTag />} />
            <Route path="/taganka/rules" element={<RulesTag />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
