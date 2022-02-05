declare type Animal = string | number | undefined;
declare let animal: Animal;
declare type Animal2Type = {
    name: string;
    age: number;
};
declare let animal2: Animal2Type;
declare const region: {
    region: string;
};
declare type FriendType = {
    readonly name: string;
};
declare const friend: FriendType;
declare type Friend2Type = {
    name?: string;
};
declare const friend2: Friend2Type;
declare type Name = string;
declare type Age = number;
declare type Person = Name | Age;
declare type PositionX = {
    x: number;
};
declare type PositionY = {
    y: number;
};
declare type Position = PositionX & PositionY;
declare type Color = {
    color?: string;
};
declare type Size = {
    size: number;
};
declare type Position2 = {
    readonly position: number[];
};
declare type MyType = Color & Size & Position2;
declare type UserInfo = {
    name: string;
    phone: number;
    email?: string;
};
declare type Minor = {
    minor: boolean;
};
declare type MinorUser = UserInfo & Minor;
declare let singup: MinorUser;
