declare function genericFunc<MyType>(x: MyType[]): MyType;
declare let a: number;
declare let b: string;
declare function generic2Func<MyType extends number>(x: MyType): number;
interface LengthCheck {
    length: number;
}
declare function generic3Func<MyType extends LengthCheck>(x: MyType): number;
declare function generic4Func<NewType extends string | string[]>(x: NewType): void;
interface Animal3 {
    name: string;
    age: number;
}
declare let data: string;
declare function MakeObj<Type>(x: string): Type;
declare let result: Animal3;
declare class Person3<Type> {
    name: any;
    constructor(a: Type);
}
declare let akey: Person3<String>;
