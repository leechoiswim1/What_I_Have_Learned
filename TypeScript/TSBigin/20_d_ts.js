// import { Plant, Tree } from "./types/common/test";
let plant = "Pine";
// tscongif.json에서 "declaration": true키면 ts.d 파일이 만들어짐.
//d.ts파일은 자동으로 글로벌 모듈이 아니다.
//export를 해서 사용해야한다.
// tscongif.json에서 "typeRoots":[임의폴더주소 ex)"./types"] 을 추가
//types/common 에 글로벌로 쓰고싶은 타입을 모은 d.ts파일을 넣으면 글로벌하게 사용 가능
//common이 안되서... types바로 밑에 넣었더니 됐다. 이유는 아직 모름
// 충돌가능성이있어서, export/import 추천
//유명한 JS 라이브러리들은 d.ts 파일을 제공
//https://github.com/DefinitelyTyped/DefinitelyTyped
//typeScript 공식 사이트
//https://www.typescriptlang.org/dt/search?search=
