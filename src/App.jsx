import { useState } from "react";
import "./App.css";
import Home from "./componenets/Home";
import Section from "./componenets/Section";

function App() {
  const [start, setStart] = useState(false);
  const toggleStart = () => {
    setStart(!start);
  };
  return <>{start ? <Section /> : <Home toggle={toggleStart} />}</>;
}

export default App;
