//protected private과 유사
//그러나 protected를 붙이면 현재 class{}안에서 +extends된 class{}안에서 사용 가능
class protectedUser {
    constructor() {
        this.x = 10;
    }
}
class NewUser extends protectedUser {
    doThis(a) {
        this.x = a;
    }
}
let person = new NewUser();
person.doThis(20);
//static : 부모 class에 직접 부여, 자식은 사용 불가(obj 복사 불가)
//staticUser.x 의 경우 10이 나옴. 원래는 부모의 변수는 검색 불가
//private/protected/public + static가능
class staticUser {
    constructor() {
        this.y = 20;
    }
}
staticUser.x = 10;
let staticChild = new staticUser();
// class introUser {
//   intro = "전문가입니다";
//   constructor(a) {
//     this.intro = a + this.intro;
//   }
// }
// class introUser {
//   static skill = "js";
//   intro = introUser.skill + "전문가입니다";
// }
// let Jenny = new introUser();
// console.log(Jenny.intro);
// let Jenny2 = new introUser();
// console.log(Jenny2.intro);
// //static 사용하면 중간에skill을 변경할수있다.
// introUser.skill = "ts";
// let Jenny3 = new introUser();
// console.log(Jenny3.intro);
class introUser {
    constructor() {
        this.skill = "ts";
        this.intro = "전문가입니다";
    }
    changeSkill(a) {
        this.skill = a;
        return this.skill + this.intro;
    }
}
let Jenny = new introUser();
class pracUser {
    constructor() {
        this.z = 30;
    }
}
pracUser.x = 10;
pracUser.y = 20;
//x: static으로 자식에게 나타나지않으며 only부모에서만 사용가능하다. 또한 private가 붙어서 외부에서 접근이 불가능하며 부모에서만 함수로 수정이 가능하다.
//y: static으로 자식에게 나타나지않으며 only부모에서만 사용가능하다. 외부에서 부모의 속성에 직접 접근가능하며 수정가능하다.
//z: private과 유사하게 부모속성내에서만 수정 사용이 가능한데 추가로 extends된 클래스에서도 가능하다.
// 답:
//1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만  x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다. User의 자식들은 x와 y를 쓸 수 없습니다.
// 2. private static x는 class 내부에서만 수정가능합니다.
// 3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯
// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.
class prac2User {
    static addOne(a) {
        return prac2User.x + a;
    }
    static printX() {
        console.log(prac2User.x);
    }
}
prac2User.x = 10;
prac2User.y = 20;
prac2User.addOne(3);
prac2User.printX();
class SquareMake {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        let box = document.createElement("div");
        box.style.width = `${this.width}px`;
        box.style.height = `${this.height}px`;
        box.style.background = this.color;
        box.style.top = `${Math.floor(Math.random() * 400)}px`;
        box.style.left = `${Math.floor(Math.random() * 400)}px`;
        box.style.position = "absolute";
        let randomBox = document.querySelector(".randomBox");
        randomBox === null || randomBox === void 0 ? void 0 : randomBox.appendChild(box);
    }
}
let 네모 = new SquareMake(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
// class Square {
//   constructor (public width :number, public height :number, public color :string){
//   }
//   draw(){
//     let a = Math.random();
//     let square = `<div style="position:relative;
//       top:${a * 400}px;
//       left:${a * 400}px;
//       width:${this.width}px;
//       height : ${this.height}px;
//       background:${this.color}"></div>`;
//     document.body.insertAdjacentHTML( 'beforeend', square );
//   }
// }
// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()
