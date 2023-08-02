import { useSelector } from "react-redux";
import { getCount } from "../../store-toolkit/redux/selector";

function Giam() {
  // const count = useSelector((state) => state.countReducer);
  const count = useSelector(getCount).count;
  return (
    <div>
      Count: <span>{count}</span>
    </div>
  );
}

export default Giam;
