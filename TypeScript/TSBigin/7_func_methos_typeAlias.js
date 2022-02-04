let func = (a) => {
    return 1;
};
let userInfo = {
    name: "kim",
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log("안녕");
    },
};
userInfo.plusOne(1);
let cutZero = (word) => {
    let result = word.replace(/^0+/, "");
    return result;
};
cutZero("019019");
function removeDash(word) {
    let result = word.replace(/-/g, "");
    return parseFloat(result);
}
removeDash("1-2-3");
let makeFunc = (a, b, c) => {
    let result = b(a);
    let result2 = c(result);
    console.log(result2);
};
makeFunc("010-1111-2222", cutZero, removeDash);
