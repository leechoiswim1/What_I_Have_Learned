import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//기본 리덕스 방법
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// interface Counter {
//   count: number;
// }

// const initialState: Counter = { count: 0 };
// // const initialState: { count: number } = { count: 0 };

// function reducer(state = initialState, action: { type: string }): Counter {
//   if (action.type === "증가") {
//     return { count: state.count + 1 };
//   } else if (action.type === "감소") {
//     return { count: state.count - 1 };
//   } else {
//     return initialState;
//   }
// }

// const store = createStore(reducer);

// // store의 타입 미리 export 해두기
// export type RootState = ReturnType<typeof store.getState>;

import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const 초기값 = { count: 0, user: "kim" };

const counterSlice = createSlice({
  name: "counter",
  initialState: 초기값,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer,
  },
});

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>;

//수정방법 만든거 export
export let { increment, decrement, incrementByAmount } = counterSlice.actions;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
