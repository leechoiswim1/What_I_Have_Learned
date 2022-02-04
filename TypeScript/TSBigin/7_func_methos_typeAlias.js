var func = function (a) {
    return 1;
};
var userInfo = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
userInfo.plusOne(1);
var cutZero = function (word) {
    var result = word.replace(/^0+/, "");
    return result;
};
cutZero("019019");
function removeDash(word) {
    var result = word.replace(/-/g, "");
    return parseFloat(result);
}
removeDash("1-2-3");
var makeFunc = function (a, b, c) {
    var result = b(a);
    var result2 = c(result);
    console.log(result2);
};
makeFunc("010-1111-2222", cutZero, removeDash);
