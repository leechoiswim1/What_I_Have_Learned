//index signature 쓰면 object 타입 지정 한번에 가능하다
interface StringOnly {
  [key: string]: string;
}

// let userObj: StringOnly = {
//   name: "kim",
//   age: "20",
//   location: "seoul",
// };
let userObj: StringOnly = {
  0: "kim",
  1: "20",
  2: "seoul",
};

userObj[0];

// string인데 오류가 나지 않는 이유는 숫자를 키값으로 넣어도 문자화된다.

// interface Css {
//   "font-size": {
//     "font-size": {
//       "font-size": number;
//     };
//   };
// }
//recursive하게 타입 만드는법
interface Css {
  "font-size": Css | number;
}

let css: Css = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

interface Obj22 {
  [key: string]: number | string;
}

let obj22: Obj22 = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

interface Obj22_1 {
  [key: string]: number | Obj22_1;
}
let obj22_1: Obj22_1 = {
  "font-size": 10,
  "secondary": {
    "font-size": 12,
    "third": {
      "font-size": 14,
    },
  },
};
