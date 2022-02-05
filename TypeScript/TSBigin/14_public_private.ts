//public : 모든 자식들이 사용 가능
//private: 자식들이 수정 불가, 중요한 정보, class안에서만 사용가능
class User {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = this.familyName + a;
  }
  changeName() {
    this.familyName = "park";
  }
}

let user1 = new User("jenny");
console.log(user1.name);

class Person1 {
  constructor(public name: string) {}
}

let child = new Person1("kim");
console.log(child);
