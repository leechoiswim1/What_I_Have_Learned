declare class User {
    name: string;
    private familyName;
    constructor(a: any);
    changeName(): void;
}
declare let user1: User;
declare class Person1 {
    name: string;
    constructor(name: string);
}
declare let child: Person1;
