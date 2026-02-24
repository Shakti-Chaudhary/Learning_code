import { useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
