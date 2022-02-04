//type이 하나로 확정되지 않을경우 type Narrowing을써야한다.
//not working (타입이 num or str 이기 때문에)
// function myfunc(x: number | string) {
//   return x + 1;
// }
// myfunc(123);
function myfunc(x) {
    if (typeof x === "string") {
        return parseInt(x) + 1;
    }
    else {
        return x + 1;
    }
}
myfunc(123);
function myfunc2(x) {
    var array = [];
    if (typeof x === "string") {
        array[0] = parseInt(x);
    }
    else {
        array[0] = x;
    }
}
myfunc(123);
// narrowing으로 판정해주는 문법들
// 1) typeof 변수
// 2) 속성명 in obj
// 3) 인스턴스 instanceof 부모
//assertion문법 ( 타입 덮어쓰기 ) 변수 as type
function myfunc3(x) {
    var array = [];
    array[0] = x;
}
myfunc(123);
var lastName = "kim";
// lastName as number; 가능하지않음
// 타입을 a에서b로 변경하는 것이 아닌 유니온타입에서 처리할타입을 정해주는 용도
//assertion문법 용도
// 1) Narrowing할때 쓴다
// 2)무슨 타입이 들어올지 100%확실할 때 씀
// 꼭 필요할 경우만 써야한다. 왜 타입에러가 났는지 모를때 비상용으로...
