import "./styles.css";
import Temperature from "./Temperature.js";
import { useState } from "react";

export default function App() {
  const [temp, setTemp] = useState(0);

  const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const handleCelsius = (e) => {
    const input = parseFloat(e.target.value);
    if (Number.isNaN(input)) return "";
    const output = toFahrenheit(input);
    const rounded = Math.round(output * 1000) / 1000;
    setTemp({ c: input, f: rounded });
  };

  const handleFahrenheit = (e) => {
    const input = parseFloat(e.target.value);
    if (Number.isNaN(input)) return "";
    const output = toCelsius(input);
    const rounded = Math.round(output * 1000) / 1000;
    setTemp({ c: rounded, f: input });
  };

  return (
    <div className="App">
      <Temperature temp={temp.c} setTemp={handleCelsius} type="c" />
      <Temperature temp={temp.f} setTemp={handleFahrenheit} type="f" />
    </div>
  );
}
