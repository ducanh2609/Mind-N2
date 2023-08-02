import { useDispatch } from "react-redux";
import { countSlice } from "../../store-toolkit/reducers/countSlice";
// import { decrement, increment } from "../../store/actions/count.actions";

function Method() {
  const dispatch = useDispatch();
  function handlerIncrement() {
    dispatch(countSlice.actions.increment());
    // dispatch(increment());
  }
  function handlerDecrement() {
    dispatch(countSlice.actions.decrement());
    // dispatch(decrement());
  }
  return (
    <div>
      <button onClick={() => handlerIncrement()}>Tăng</button>
      <button onClick={() => handlerDecrement()}>Giảm</button>
    </div>
  );
}

export default Method;
