declare class PersonMake {
    name: string;
    age: number;
    constructor(a: string, b: number);
    greeting(a: string): void;
}
declare let person1: PersonMake;
declare class Car {
    model: string;
    price: number;
    constructor(model: string, price: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    str: any;
    num: any;
    constructor(...arg: any[]);
}
declare let obj: Word;
