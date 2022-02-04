type FuncType = (a: string) => number;

let func: FuncType = (a) => {
  return 1;
};

//함수 type alias부착
//1) 함수타입은 ()=>{}
//2) 함수표현식에만 type alias사용가능

type UserInfo2 = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let userInfo: UserInfo2 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

userInfo.plusOne(1);
//obj 안의 함수타입 지정

type CutZero = (word: string) => string;
let cutZero: CutZero = (word) => {
  let result = word.replace(/^0+/, "");
  return result;
};
cutZero("019019");

function removeDash(word: string): number {
  let result = word.replace(/-/g, "");
  return parseFloat(result);
}

removeDash("1-2-3");

type func1 = (a: string) => string;
type func2 = (a: string) => number;
let makeFunc = (a: string, b: func1, c: func2) => {
  let result = b(a);
  let result2 = c(result);
  console.log(result2);
};

makeFunc("010-1111-2222", cutZero, removeDash);
