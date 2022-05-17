/*
 window.alert("hi");
document.write("daya");
console.log("hello world" ); 



var x;
x=5;
x=10;
console.log(x);



let x = 15;
console.log(x);
x = 7;
console.log(x);


const x = 15;
console.log(x);
x = 7;
console.log(x);
 

console.log("hello");
console.dir("hello");
console.table("hello");
console.warn("hello");
console.error("hello");
console.clear("hello");

console.log("hello % C there,Color:Red");

 let fruits="apple";
 console.log(fruits); 
 */

// let person = {name:"karan",age:50, Address:"Jaffna,Srilanka"};
//  console.log (person);
//  console.log(person.name);
//  person.name="raja";
//  console.log (person.name);

// 


//let colors=["red","green","blue","yellow"];
//console.log(colors);
// colors.pop();
// console.log(colors.pop());

/*console.log("hello\"world\"");
console.log('my father\'sname');
console.log('hello\n world');
{ let x = 25; 
console.log(x);
} */

/*
function scope(){
    var  x = "world";
    console.log(x);
}
scope();
let scope1 = function(){

}  

function scope(){
    var  x = "world";
    console.log(x);
} 
scope();
function scope2(){
let scope1 = function(){
var y = "hello";
console.log(y);
}
scope1();
}
scope2();

function scope(){
    var  x = "world";
    return x
    
} 
console.log(x);
scope();




var scope = function(num){
    return num*num
}

console.log(scope(3));


var scope = (num1,num2) => {return num1*num2}
console.log(scope(4,2));

var scope = (num) => {return Math.PI*num*num}
console.log(scope(4));

var scope = (num) => {return Math.PI*Math.pow}
console.log(scope(4));


const daya = {
    name: "ram",
    age: 21,
    address: {
        city: "Jaffna",
        country: "Srilanka"
    }

}
console.log("I am " + daya.name + "." + " " + "I am" + daya.age + "years old." + " " + "I live in" + " " + daya.address.city + " " + daya.address.country);


let num1 = 100;
let num2 = 22;
let name1 = "abi";

console.log(num1 + num2);
let type = num1 > 15 ? "true" : "false";
console.log(type);


function add(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 * 3)
    console.log(num2 - num1)
}
add(1, 3,)

let hour = new Date();
let hrs = hour.getHours();
console.log(hour);
console.log(hour.getHours());

if (hour >= 0 && hour <= 13) {
    console.log("Good Morning");
} else if (hour >= 13 && hour <= 17) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}


//Switch case
let grade= "A";

switch(grade){
    case "A":
        console.log("pass");
        break;
    case "b":
        console.log("average");
        break;
}
*/
/*
function btnclicked(){
    console.log('button clicked');
}


    
   console.log(getElementById("demo").onmouseover = function() {mouseOver();
  
  function mouseOver() {
    document.getElementById("demo").style.color = "red";
  }
   }
   */

   let btn = document.getElementById("addbtn");
   btn.addEventListener('click',function(){
   alert("fun"),console.log("dell")});