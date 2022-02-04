//rest parameter function(...a)
function restFunc(...a) { }
restFunc(1, 4, 5, 4, 2, true);
// spread operator :...array or obj
let arr = [1, 2, 3];
let arr2 = [4.5];
let arr3 = [...arr, ...arr2];
//destructuring
let hello_100 = ["hello", 100];
let [hello, num] = ["hello", 100];
let newStudent = { student: true, age: 20 };
let { student2, age2 } = { student2: true, age2: 20 };
function restFunc2({ student, age }) {
    console.log(student, age);
}
function findMaximum(...numbers) {
    let temp = 0;
    numbers.forEach((num) => {
        if (num > temp) {
            temp = num;
        }
    });
    return temp;
}
console.log(findMaximum(6, 3, 7, 2));
function comment({ user, comment, admin }) {
    console.log(user, comment, admin);
}
comment({ user: "kim", comment: [3, 5, 4], admin: false });
function userTaste([age, liquid, taste]) {
    console.log([age, liquid, taste]);
}
userTaste([40, "wine", false]);
