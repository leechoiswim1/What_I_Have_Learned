//tuple type:첫자료는 무조건 string, 두번째는 무조건 boolean(위치 고려한 타입지정 가능)
let bark: [string, boolean?] = ["dog", true];

function barkFunc(...x: [number, string]) {
  console.log(x);
}
function barkFunc2(a: number, b: string) {
  console.log([a, b]);
}

barkFunc(1, "2");

let arr_1 = [1, 2, 3];
//spread operate
let arr_2: [number, number, ...number[]] = [4, 5, ...arr_1];
let arr_3: [...number[]] = [...arr_1, ...arr_2];
console.log(arr_3);
