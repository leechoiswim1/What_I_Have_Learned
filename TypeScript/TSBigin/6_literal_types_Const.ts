//Literal Types
//newName에는 kim만 들어갈수있다.
let newName: "kim";

let itsMe: "solo" | "beauty";

function newFunc(a: "hello") {
  console.log(a);
}
//파라미터 hello만 가능
newFunc("hello");

//return값으로 1|0 만 가능
function newFunc2(a: "hello"): 1 | 0 {
  return 1;
}

function rockPaperScissors(
  a: "rock" | "paper" | "scissors"
): ("rock" | "paper" | "scissors")[] {
  return ["rock"];
}

//const변수의 한계 -> 업그레이드 버전: 리터럴타입 (자료를 여러개 담을수있는 const변수)
//obj의 자료를 완전히 잠가놓고 싶을때 as const 를 씀.
//1) obj value값을 그대로 타입으로 지정
//2) obj 속성들에 모두 readonly 붙여줌
let documents = { name: "kim" } as const;
// let documents= { readonly name: "kim" };
// let documents: { name: "kim" } = { name: "kim" };

function myFunc3(a: "kim") {}
myFunc3(documents.name);
