// function narrowFunc(a:string|undefined){
//     if(typeof a ==='string'){
//     }else
// }
//1) && 연산자로 null&undefined타입 체크하기
//a가 undefined인경우 if문이 실행이 안되고 string인 경우만 if문 실행
function narrowFunc(a) {
    if (a && typeof a === "string") {
    }
}
function animalFunc(animal) {
    //Fish타입인지 아닌지 검사
    if ("swim" in animal) {
        animal.swim;
    }
}
function CarBike(x) {
    //x가 Car2인지 아닌지 구분하는 법
    if (x.wheel === "4개") {
        console.log("x는 Car2타입이에요");
    }
}
