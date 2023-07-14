import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { dec, inc, rnd } from "../actions"

const Counter = () => {
  //  shallowEqual - пересмотреть зачем конкретно нужен
  const counter = useSelector(state => state.counter, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div className="jumbotron">
      <h1 id="counter">{counter}</h1>
      <button onClick={() => dispatch(dec())} id="dec" className="btn btn-primary">DEC</button>
      <button onClick={() => dispatch(inc())} id="inc" className="btn btn-primary">INC</button>
      <button onClick={() => dispatch(rnd())} id="rnd" className="btn btn-primary">RND</button>
    </div>
  );
}

export default Counter;