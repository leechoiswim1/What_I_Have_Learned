//implements keyword
// class Car_ {
//     model : string;
//     price : number = 1000;
//     constructor(a :string){
//       this.model = a
//     }
//   }
//   let 붕붕이 = new Car_('morning');

interface CarType {
  model: string;
  price: number;
}

// class가 interface에 있는 속성을 다 들고있는지 implement로 확인 가능
class Car_ implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car_("morning");

//implements는 타입지정문법이 아님.
//그래서 따로 타입 지정을 해줘야한다.
