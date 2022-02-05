import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, RootState } from "./index";
import { Dispatch } from "redux";

let box: JSX.IntrinsicElements["div"] = <div>this is box</div>;
// function App() {
//   const data = useSelector((state: RootState) => state);
//   const dispatch: Dispatch = useDispatch();
//   let [user, setUser] = useState("kim");
//   // let [user, setUser] = useState<string | number>("kim");
//   return (
//     <div>
//       {data.count}
//       <button
//         onClick={() => {
//           dispatch({ type: "증가" });
//         }}
//       >
//         증가
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "감소" });
//         }}
//       >
//         감소
//       </button>
//       {/* {box}
//       <Profile name="철수" age="20"></Profile>
//       <h4>안녕하십니까</h4> */}
//     </div>
//   );
// }

function App() {
  const data = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();
  const countRef = useRef<HTMLInputElement>(null);

  const handleCount = () => {
    if (countRef.current) {
      dispatch(incrementByAmount(parseInt(countRef.current.value)));
      countRef.current.value = "";
    }
  };

  return (
    <div>
      {data.counter1.count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        감소
      </button>

      <input ref={countRef} type="number"></input>
      <button onClick={handleCount}></button>
    </div>
  );
}

export default App;
