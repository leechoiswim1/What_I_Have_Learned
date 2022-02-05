let obj23 = { name: "kim" };
Object.keys(obj23);

// interface Woman {
//   age: number;
//   name: string;
// }

// type WomanKeys = keyof Woman;
// // 'age'|'name' 유니온타입이 남음
// let key_1: WomanKeys = "age";

interface Woman {
  [key: string]: number;
}
type WomanKeys = keyof Woman;

type Toy = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};
//maping
type TypeChanger<MyType, T> = {
  [key in keyof MyType]: T;
};

type newToy = TypeChanger<Toy, string>;

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type newBus = TypeChanger<Bus, string>;
