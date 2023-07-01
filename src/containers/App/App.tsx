import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  generatorsConfig,
  UPDATE_FREQUENCY,
  type GeneratorType,
} from "../../constants";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  click,
  buyGenerator,
  autoMine,
  selectGold,
  selectPickaxe,
} from "../../clickerSlice";

const calculateGeneratorPrice = (type: GeneratorType, currentCount: number) => {
  return Math.floor(
    generatorsConfig[type].basePrice *
      Math.pow(generatorsConfig[type].rateGrowth, currentCount)
  );
};

function App() {
  const gold = useAppSelector(selectGold);
  const pickaxe = useAppSelector(selectPickaxe);

  const dispatch = useAppDispatch();

  const pickaxePrice = calculateGeneratorPrice("pickaxe", pickaxe.count);

  useEffect(() => {
    const mineTimer = setInterval(
      () => dispatch(autoMine()),
      1000 / UPDATE_FREQUENCY
    );
    return () => clearInterval(mineTimer);
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You have {gold.currentGold}.</p>
        <p>Gold per second: {gold.goldPerSecond}</p>
        <button
          className="App-link"
          onClick={() => {
            dispatch(click());
          }}
        >
          Mine!!
        </button>

        <button
          onClick={() => {
            dispatch(buyGenerator({ type: "pickaxe", price: pickaxePrice }));
          }}
          disabled={pickaxePrice > gold.currentGold}
        >
          Buy a pickaxe for {pickaxePrice} gold
        </button>
      </header>
    </div>
  );
}

export default App;
