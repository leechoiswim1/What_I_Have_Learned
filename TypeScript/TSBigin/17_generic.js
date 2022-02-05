// Generic : 함수에 타입 파라미터를 넣을 수 있음
function genericFunc(x) {
    return x[0];
}
let a = genericFunc([4, 2]);
let b = genericFunc(["4", "2"]);
console.log(a + 1);
//extends사용하여 타입제한
function generic2Func(x) {
    return x - 1;
}
function generic3Func(x) {
    return x.length;
}
function generic4Func(x) {
    console.log(x.length);
}
generic4Func("hello");
generic4Func(["kim", "park"]);
let data = '{"name" : "dog", "age" : 1 }';
function MakeObj(x) {
    return JSON.parse(x);
}
let result = MakeObj(data);
console.log(result);
//class에 generic적용
class Person3 {
    constructor(a) {
        this.name = a;
    }
}
let akey = new Person3("어쩌구");
akey.name; //any 타입이 되었넹
