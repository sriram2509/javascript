/*
console.log("Hello world");
console.error("This is an error");
console.warn("This is a warning");

//var,let,const
const score = 100;
console.log(score);

//String,Number,Boolean,null,undefined

const name ='John';
const age = 30;
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;

console.log( name );
console.log( age );
console.log(rating);
console.log( iscool);
console.log(z);

//concationation
console.log(" My name is " + name + " and I am " + age + " years old.");

// const Hello(`My name is ${name} and I am ${age} years old`);  

// console.log(Hello);
*/






























// //for-in
// const person = {
//   name:'Ram',
//   age:21,
//   place:'colombo',
//   school:'jchc'
// };

// /* for(initialExpression; condition; step){
//   //code
// }*/

// for(let key in person){
//   //code
//   console.log(key+":",person[key]);
// }

// Dot Notation
//person.name

// Breaket Notation
//person['name']


// let colors = ['red','blue','green','black'];

// for(let key in colors){
//   console.log(colors[key]);
// }
// let age = 21;

// if(age>=18){
// console.log('You can Drive')}
// else{
// console.log("You can't drive")}


/*
//Tenary operators(?=if,:=else)
let age = 21;
age>=18 ?
console.log('You can Drive')
:
console.log("You can't drive")
*/




// let tech = {
//     name:'ram',
//     age:12,
//     laptop: {
//         cpu: 'intel',
//         harddisk: '1TB'
//     }
    
// }
// tech.telephone="0768954231"

// {console.log(key,tech[key]);}



// let num=[];
// num[0]=4;
// num[99]=100;
// for(let key in num){
//     console.log(key,num[key])
// }
// for (let n of num)
// {
//     console.log(n,num[n])}


let array = [25,75,12,32,79,11] 
array.filter(a=>a%8===0) .forEach(a=>
    {console.log(a)});
array.map(a=>a*3) .forEach(a=>{console.log(a)})

let totalarray= array.reduce(
function addnumber (pv,cv)
{return pv + cv ;});
console.log(totalarray+totalarray);


const person=[
    {id:01 ,name:"Kamal", salary: 20000},
    {id:02 ,name:"Mala", salary: 30000},
    {id:03 ,name:"Raja", salary: 45000}
]
 totalsalary=person.reduce(
    function addsalary(p1,p2)
    {return p1+p2},0)
    console.log(person.salary+person.salary)
    
