//union type
let member = 123;
// (number | string|boolean) = 123;
let member2 = [1, 2, 3];
let member3 = [1, "2", 3];
let object = { a: "everything" };
//any :everytype work
let candy;
candy = 123;
candy = [];
//unknown:everytype work
let choco;
choco = 123;
//unknown의 경우 choco의 타입이 unkown이지만 지정된것이 number임으로,  snack의 타입과 맞지않아 에러가뜬다. 그러나 any의 경우는 타입을 아예 해제하여 에러조차 뜨지않는다.
// let snack:string=choco;
// choco-1(에러) :간단한 수학연산도 타입이 맞아야 할 수 있다.
let grade;
// age+1(에러)
// string+1 (가능) / number+1(가능)  / string|number타입+1 (불가)
let park;
let user = "kim";
let age = undefined;
let married = false;
let james = [user, age, married];
let school = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
