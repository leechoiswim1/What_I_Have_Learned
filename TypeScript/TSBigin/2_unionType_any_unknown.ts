//union type
let member: number | string = 123;
// (number | string|boolean) = 123;

let member2: number[] = [1, 2, 3];
let member3: (number | string)[] = [1, "2", 3];

let object: { a: string | number } = { a: "everything" };

//any :everytype work
let candy: any;
candy = 123;
candy = [];

//unknown:everytype work
let choco: unknown;
choco = 123;
//unknown의 경우 choco의 타입이 unkown이지만 지정된것이 number임으로,  snack의 타입과 맞지않아 에러가뜬다. 그러나 any의 경우는 타입을 아예 해제하여 에러조차 뜨지않는다.
// let snack:string=choco;
// choco-1(에러) :간단한 수학연산도 타입이 맞아야 할 수 있다.

let grade: string | number;
// age+1(에러)
// string+1 (가능) / number+1(가능)  / string|number타입+1 (불가)

let park: string;

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let james: (string | undefined | number | boolean)[] = [user, age, married];

let school: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
