// 1)type typeName=string;
// 2)interface
let square = { color: "red", width: 100 };
let student = { name: "kim" };
let teacher = { name: "park", age: 30 };
let product = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
let shoppingCart = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
let newCart = [{ product: "청소기", price: 7000, card: false }];
let newObj = {
    plus(a, b) {
        let result = a + b;
        return result;
    },
    minus(a, b) {
        let result = a - b;
        return result;
    },
};
