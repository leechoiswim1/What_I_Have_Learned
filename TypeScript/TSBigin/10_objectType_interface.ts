// 1)type typeName=string;
// 2)interface

interface Square {
  color: string;
  width: number;
}
let square: Square = { color: "red", width: 100 };

//interface 장점:extends로 복사가능
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let student: Student = { name: "kim" };
let teacher: Teacher = { name: "park", age: 30 };

//&(intersection type) -> extends와 다르게 복사가 아닌 두타입을 전부 만족하는 타입이라는 뜻
type Animal2 = { name: string };
type Cat = { age: number } & Animal2;

//interface는 중복선언이 가능 (자동 extends, 선언된 두타입이 합쳐짐_유연) , 중복선언시 중복속성일경우는 에러
//type은 중복선언이 불가능(엄격) 중복속성시 에러가 안남. 그러나 사용할때 에러남.

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let product: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface ShoppingCart {
  product: string;
  price: number;
}
let shoppingCart: ShoppingCart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface Cart extends ShoppingCart {
  card: boolean;
}

let newCart: Cart[] = [{ product: "청소기", price: 7000, card: false }];

interface NewObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}
let newObj: NewObj = {
  plus(a, b) {
    let result = a + b;
    return result;
  },
  minus(a, b) {
    let result = a - b;
    return result;
  },
};
