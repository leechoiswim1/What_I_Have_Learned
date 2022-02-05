interface Square {
    color: string;
    width: number;
}
declare let square: Square;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let student: Student;
declare let teacher: Teacher;
declare type Animal2 = {
    name: string;
};
declare type Cat = {
    age: number;
} & Animal2;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let product: Product;
interface ShoppingCart {
    product: string;
    price: number;
}
declare let shoppingCart: ShoppingCart[];
interface Cart extends ShoppingCart {
    card: boolean;
}
declare let newCart: Cart[];
interface NewObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let newObj: NewObj;
