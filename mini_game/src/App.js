// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [amount, setAmount] = useState(1);
  const [upgrade, setUpgrade] = useState(10);
  const [majorUpgrade, setMajorUpgrade] = useState(100);

  const addOne = () => {
    setCounter(counter + 1);
    setCurrency(currency + amount);
  };
  const buildingClick = () => {
    if (currency >= upgrade) {
      setAmount(amount + 1);
      setCurrency(currency - upgrade);
      setUpgrade(upgrade * 2);
    }
  };
  const majorUpgradeClick = () => {
    if (currency >= majorUpgrade) {
      setAmount(amount + 10);
      setCurrency(currency - majorUpgrade);
      setMajorUpgrade(majorUpgrade * 2);
    }
  };
  const apps = () => {
    return <h1>{`Time: ${Date.now()}`}</h1>;
  };
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <h1>Currency: {currency}</h1>
      <h1>Amount: {amount}</h1>

      <button onClick={addOne}>+</button>
      {currency >= upgrade && (
        <button onClick={buildingClick}>Buy Building</button>
      )}

      {currency >= majorUpgrade && (
        <button onClick={majorUpgradeClick}>majorUpgrade</button>
      )}
    </div>
  );
}

export default App;
