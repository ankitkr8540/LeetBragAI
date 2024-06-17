import React, { useContext } from "react";
import "./App.css";
import Clients from "./screens/Clients";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen";
import Home from "./screens/Home";
import { ThemeContext } from "./Theme";
import "./style.css";
import Header from "./components/Header";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme} flex`}>
      <Router>
        <Header />
        {/* <Container> */}
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/:username" element={<Clients />} />
        </Routes>
        {/* </Container> */}
      </Router>
    </div>
  );
}

export default App;
