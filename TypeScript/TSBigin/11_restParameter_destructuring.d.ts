declare function restFunc(...a: (number | boolean)[]): void;
declare let arr: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let hello_100: (string | number)[];
declare let hello: string, num: number;
declare let newStudent: {
    student: boolean;
    age: number;
};
declare let student2: boolean, age2: number;
declare type restFunc2 = {
    student: string;
    age: number;
};
declare function restFunc2({ student, age }: restFunc2): void;
declare function findMaximum(...numbers: number[]): number;
declare type CommentUser = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare function comment({ user, comment, admin }: CommentUser): void;
declare type UserTaste = (number | string | boolean)[];
declare function userTaste([age, liquid, taste]: UserTaste): void;
