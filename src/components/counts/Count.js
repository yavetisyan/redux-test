import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, reset} from "../store/features/countSlice";

const Count = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)
  const addValue = Number(incrementAmount) || 0
  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }
  return (
    <div className="App">
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(count))}>Incr by Amount</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add value</button>
        <button onClick={() => resetAll()}>Reset All</button>
      </div>

    </div>
  );
};

export default Count;