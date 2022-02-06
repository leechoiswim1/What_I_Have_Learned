type Bear<T> = T extends string ? string : unknown;
let bear: Bear<string>;
let cat: Bear<number>;

type FirstItem<T> = T extends [] ? [] : any;
let firstItem: FirstItem<number>;

//infer 추론하다.
// type TypeInfer<T> = T extends infer R ? R : unknown;
// type NewTypeInfer = TypeInfer<string>;
// type TypeInfer<T> = T extends (infer R)[] ? R : unknown;
// type NewTypeInfer = TypeInfer<string[]>;

// type TypeInfer<T> = T extends () => infer R ? R : unknown;
// type NewTypeInfer = TypeInfer<() => void>;

// 위에는 자주 안씀 ReturnType<> 이라는 기본 문법이 있다.
type NewReturnTpye = ReturnType<() => void>;

type Paper<T> = T extends [string, ...any] ? T[0] : unknown;

let newpaper: Paper<[string, number]>;
let newpaper2: Paper<[boolean, number]>;

type TypeInfer<T> = T extends (x: infer R) => any ? R : any;
type typeinfer = TypeInfer<(x: number) => void>; //이러면 number가 이 자리에 남음
type typeinfer2 = TypeInfer<(x: string) => void>; //이러면 string이 이 자리에 남음
