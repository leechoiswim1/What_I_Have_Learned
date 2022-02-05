declare class protectedUser {
    protected x: number;
}
declare class NewUser extends protectedUser {
    doThis(a: any): void;
}
declare let person: NewUser;
declare class staticUser {
    private static x;
    y: number;
}
declare let staticChild: staticUser;
declare class introUser {
    private skill;
    intro: string;
    changeSkill(a: any): string;
}
declare let Jenny: introUser;
declare class pracUser {
    private static x;
    static y: number;
    protected z: number;
}
declare class prac2User {
    private static x;
    static y: number;
    static addOne(a: number): number;
    static printX(): void;
}
declare class SquareMake {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let 네모: SquareMake;
