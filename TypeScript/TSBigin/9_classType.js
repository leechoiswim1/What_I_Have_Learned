class PersonMake {
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
    greeting(a) {
        console.log("안녕" + a);
    }
}
let person1 = new PersonMake("kim", 30);
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price * 0.1;
    }
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
class Word {
    constructor(...arg) {
        let strs = [];
        let nums = [];
        arg.forEach((a) => {
            if (typeof a === "string") {
                strs.push(a);
            }
            else
                nums.push(a);
        });
        this.num = nums;
        this.str = strs;
    }
}
let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
