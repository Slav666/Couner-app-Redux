import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {logged ? <h3>Valuable information I shouldn't see </h3> : ""}
    </div>
  );
}

export default App;
