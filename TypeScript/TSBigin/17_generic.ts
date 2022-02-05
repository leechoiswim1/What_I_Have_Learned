// Generic : 함수에 타입 파라미터를 넣을 수 있음

function genericFunc<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = genericFunc<number>([4, 2]);
let b = genericFunc<string>(["4", "2"]);
console.log(a + 1);

//extends사용하여 타입제한
function generic2Func<MyType extends number>(x: MyType) {
  return x - 1;
}

//커스텀 타입으로도 타입제한
interface LengthCheck {
  length: number;
}

function generic3Func<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

function generic4Func<NewType extends string | string[]>(x: NewType) {
  console.log(x.length);
}

generic4Func<string>("hello");
generic4Func<string[]>(["kim", "park"]);

interface Animal3 {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function MakeObj<Type>(x: string): Type {
  return JSON.parse(x);
}
let result = MakeObj<Animal3>(data);
console.log(result);

//class에 generic적용
class Person3<Type> {
  name;
  constructor(a: Type) {
    this.name = a;
  }
}
let akey = new Person3<String>("어쩌구");
akey.name; //any 타입이 되었넹
