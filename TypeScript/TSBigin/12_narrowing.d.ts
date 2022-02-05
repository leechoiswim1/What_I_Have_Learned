declare function narrowFunc(a: string | undefined): void;
declare type Fish = {
    swim: string;
};
declare type Bird = {
    fly: string;
};
declare function animalFunc(animal: Fish | Bird): void;
declare type Car2 = {
    wheel: "4개";
    color: string;
};
declare type Bike = {
    wheel: "2개";
    color: string;
};
declare function CarBike(x: Car2 | Bike): void;
