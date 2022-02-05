// function narrowFunc(a:string|undefined){
//     if(typeof a ==='string'){

//     }else
// }
//1) && 연산자로 null&undefined타입 체크하기
//a가 undefined인경우 if문이 실행이 안되고 string인 경우만 if문 실행
function narrowFunc(a: string | undefined) {
  if (a && typeof a === "string") {
  }
}
//2) 서로 배타적인 속성을 가지고있는 경우 속성명 in 오브젝트자료
type Fish = { swim: string };
type Bird = { fly: string };
function animalFunc(animal: Fish | Bird) {
  //Fish타입인지 아닌지 검사
  if ("swim" in animal) {
    animal.swim;
  }
}

// obj instanceof parantClass

//비슷한 obj타입인경우 literal type 강제로 만들어둔다.
type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};
function CarBike(x: Car2 | Bike) {
  //x가 Car2인지 아닌지 구분하는 법
  if (x.wheel === "4개") {
    console.log("x는 Car2타입이에요");
  }
}
