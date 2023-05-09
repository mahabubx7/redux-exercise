import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './features/counterSlice';
import Albums from './Album';
import logo from './logo.svg';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <main>
          <div>
            <button type="button" onClick={() => dispatch(increment())}>+</button>
            <button type="button" onClick={() => dispatch(reset())}>{ count }</button>
            <button type="button" onClick={() => dispatch(decrement())}>-</button>
          </div>

          <Albums />
        </main>
      </header>
    </div>
  );
}

export default App;
