//변수의 재정의 declare문법
declare let aData;
console.log(aData + 1);

//ts는 ambient module 글로벌 모듈
export {};
//로컬 모듈이 된다. (전역변수화를 막을수있음.)

//전역변수로 만들고싶을때 global로 재정의하면된다.(g type, g interface 만들때 주로 사용)
declare global {
  type Dog = string;
}
