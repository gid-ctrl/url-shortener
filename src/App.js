import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./backgroundanimation";
import LinkResult from "./linkresult";
import Shortener from "./shortener";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <Shortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
