// let y=null;
// let z;
// console.log(typeof z);
// z=y;
// console.log(typeof z)

// const num=Infinity/Infinity
// console.log(num)

// let myVar;
// console.log(myVar===null);

// let text1="20";
// let text2="5";
// let result=text1<text2;
// console.log(result);

// let a=5;
// console.log(a);
// console.log(a++);
// console.log(a++);

// console.log(0||"hello"||true);

// let x=1;
// console.log(x++);
// console.log(x);

// let y=1;
// console.log(++y);
// console.log(y);

// const double=(number) => number*2;
// console.log(double(5));

// const greet=name=>`Hello, ${name}!`;
// console.log(greet('John'));

// const addNumbers=(x,y) => x+y;
// console.log(addNumbers(2,3));

//impure pure function
// function add(a,b){
//     return a+b;
// }
// const result=add(3,4);

// let counter=0;
// function incrementCounter(){
//     counter++;
//     console.log("Counter increment.");
// }
// incrementCounter();
// console.log(counter);

//high order function
// const names=["Alice","Bob","Charlie","Dave"];

// const namesLengths=names.map(function(name){
//     return name.length;
// });
// console.log(namesLengths);

// const words=["apple","banana","grape","orange","kiwi"];
// const filteredWords=words.filter(function(word){
//     return word.length>5;
// });
// console.log(filteredWords);

// const numbers=[1,2,3,4,5];
// const product=numbers.reduce(function(accumulator,currentValue){
//     return accumulator*currentValue;
// },1);
// console.log(product);

// const numbers=[1,2,3,4,5];
// const foundNumber=numbers.find(function(number){
//     return number>3;
// });
// console.log(foundNumber);

// const fruits=["apple","banana","grape","orange"];
// const index=fruits.findIndex(function(fruit){
//     return fruit==="grape";
// });
// console.log(index);

// var obj={
//     calculateArea(radius){
//         return Math.PI*radius*radius;
//     },
//     displayMessage(name){
//         console.log("Hello, "+name+"!");
//     }
// };

// const person={
//     name: "John",
//     age: 30,
//     occupation: "Engineer",
// };

// const anotherPerson=person;
// anotherPerson.name="Jane";
//  console.log(person.name);

// let obj={
//     name: "John",
//     greet: function(){
//         return "Hello, "+ this.name;
//     },
// };

// greet(){return "Hello, "+this.name;}

// function Planet(name, radius, isHabitable){
//     this.name=name;
//     this.radius=radius;
//     this.isHabitable=isHabitable;
// }

// let obj={firstName: "John", lastName: "Doe"};
// let{firstName: fn, lastName: ln}=obj;
// console.log(firstName);

// const {a,b}={a:1,b:2};
// const x=a+b;

// let obj={name: "John", country:"India", age:30};
// let name;
// ({name}=obj);
// let{country:c,age:a}=obj;
// obj.country="Canada";
// console.log(name,c,a);

// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b);

// let nestedArray=["orange",["apple","banana",["grape","mango"]],"peach"];
// let [first,[,,[third]]]=nestedArray;

function convertMinutesToHours(totalMinutes) {
    const hours = /*Math.floor*/(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    const remainingHours = remainingMinutes / 60;
    return { hours: hours /*+ remainingHours*/, minutes: remainingMinutes };
}

// Example usage:
const totalMinutes = 110;
const { hours, minutes } = convertMinutesToHours(totalMinutes);
console.log(`${totalMinutes} minutes is equal to ${hours} hours and ${minutes} minutes.`);
