declare type FuncType = (a: string) => number;
declare let func: FuncType;
declare type UserInfo2 = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let userInfo: UserInfo2;
declare type CutZero = (word: string) => string;
declare let cutZero: CutZero;
declare function removeDash(word: string): number;
declare type func1 = (a: string) => string;
declare type func2 = (a: string) => number;
declare let makeFunc: (a: string, b: func1, c: func2) => void;
