//Html조작시 narrowing방법 5가지
let title = document.querySelector("#title");
//1) null체크
if (title != null) {
    title.innerHTML = "반가워요";
}
//2) instanceof 연산자 ***
if (title instanceof Element) {
    title.innerHTML = "반가워요";
}
//3) as 로 type 간주하기 (긴급용)
// let title = document.querySelector("#title") as Element;
// title.innerHTML = "반가워요";
//4) optional chaining
if (title === null || title === void 0 ? void 0 : title.innerHTML) {
    title.innerHTML = "반가워요";
}
//5) strict모드 쓰지않기.
let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
let button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("클릭");
});
let image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
    image.src = "new.jpg";
}
let links = document.querySelectorAll(".naver");
links.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
// for (let i = 0; i < 3; i++){
//     let a = links[i];
//     if (a instanceof HTMLAnchorElement){
//       a.href = 'https://kakao.com'
//     }
//   }
