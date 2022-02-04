function getTwice(x) {
    return x * 2;
}
//return할게없을때, void를 씀
function getSum(x) {
    x + x;
}
//파라미터가 옵션인 경우 = undefined랑 같다.
function twice(x) {
    if (x != null)
        return x * 2;
}
// function twice(x: number |undefined): number {
//     return x * 2;
//   }
function greetring(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이없습니다.");
    }
}
function countDigit(x) {
    return x.toString().length;
}
function merriagePossibility(income, house, attractive) {
    let score = 0;
    score += income;
    if (house) {
        score += 500;
    }
    if (attractive === "상") {
        {
            score += 100;
        }
    }
    if (score >= 600) {
        return "possible";
    }
}
console.log(merriagePossibility(100, true, "상"));
