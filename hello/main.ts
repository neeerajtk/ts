export {}
let msg = 'Welcome';
console.log(msg);

// compile using tsc main.ts 
// tsc main --watch 

let sum = 10;
const y = 20;

let title;

const help = 'title';

let isBeginner: boolean = true;
let total: number = 4;
let name: string = 'Neeraj';

let sent: string = `I'm ${name}
I'm new to Typescript`;

console.log(sent);

let n: null = null;
let u: undefined = undefined;

let new1 : boolean = undefined;
let new2 : string = null;

// Array 
let list1: number[] = [1,2,3,4,5];
let list2: Array<number> = [1,2,3,4,5];

// above is used for same type , when mixed type we use tuples 

let person1 : [string,number] = ['neeraj',22];
// has exactly one string and one number in the same defined order

enum Color{Red,Green,Yellow};
let c:Color = Color.Green;
console.log(c);
// prints the location of Green , that is 1
enum Car{Maruthi = 4,Honda,Hyundai};
let d:Car = Car.Honda;
console.log(d);
// Prints 5 


let randomVal : any = 0;
randomVal = 'neeraj';
randomVal = 1;
// randomVal.toUpperCase();
console.log(randomVal);

let myVariable : unknown = 1;
(myVariable as String).toUpperCase();
console.log(myVariable);


