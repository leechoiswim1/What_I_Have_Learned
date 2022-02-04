// type alias (타입변수)
type Animal = string | number | undefined;
// let animal:string|number|undefined;
let animal: Animal = 123;
//obj형식 타입변수
type Animal2Type = { name: string; age: number };
let animal2: Animal2Type = { name: "kim", age: 20 };

const region = { region: "seoul" };
region.region = "busan";

// friend.name = "jenny"; (readonly but throw error only for editor and terminal)
type FriendType = { readonly name: string };
const friend: FriendType = {
  name: "amber",
};

//name (optional key)
type Friend2Type = { name?: string };
// type Friend2Type = { name: string|undefined };
const friend2: Friend2Type = {
  name: "amber",
};

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY;
//type Positon={x:number,y:number}

//같은 이름의 type변수 재정의 불가능

type Color = { color?: string };
type Size = { size: number };
type Position2 = { readonly position: number[] };
type MyType = Color & Size & Position2;

type UserInfo = { name: string; phone: number; email?: string };
type Minor = { minor: boolean };
type MinorUser = UserInfo & Minor;
let singup: MinorUser = {
  name: "kim",
  phone: 123,
  minor: true,
};
