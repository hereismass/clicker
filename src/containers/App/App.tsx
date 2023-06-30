import logo from './logo.svg';
import './App.css';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { click, selectGold } from '../../clickerSlice';

function App() {
  const gold = useAppSelector(selectGold);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => {dispatch(click())}}
        >
          count is {gold}
        </button>
      </header>
    </div>
  );
}

export default App;
