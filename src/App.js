import { useDispatch, useSelector } from "react-redux";
import { incrementRequest } from "./redux/actions/countActions";
import { useEffect } from "react";

function App() {
  const count = useSelector(state => state.countReducer.count);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(count)
  },[count])

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => dispatch(incrementRequest())}>
        Increment (Async)
      </button>
    </div>
  );
}

export default App;
