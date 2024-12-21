console.log("hello world", 4 + 6, "another world");

//3 Javascript Variables
// var number = 34;
// var number2 = 56;
// console.log(number + number2);

//4.Data types in javascript
// var num1 = 455;
// var num2 = 56.76;

// var str1 = "this is a string";
// var str2 = "this is also another string";

// var marks = {
//     ravi: 34,
//     shivam: 32,
//     harry: 38
// }
// var a = true;
// var b = false;
// console.log(a, b);

// var und;
// console.log(und);

// var n = null;
// console.log(n);

// console.log(a);
// console.log(marks);


//Arrays and object
// var arr = [1, 2, 3, "bablu", 4, 5];

//function in javascript
// function avg(a, b) {
//     return (a + b) / 2;
// }
// c1 = avg(4, 8);
// c2 = avg(10, 8);
// console.log(c1, c2);


//if statement
// if(age>18)
// {
//     console.log("You can drink Rasna");
// }
// else
// {
//     console.log("You cannot drink rasna water");
// }

// var age=24;
// if(age>32)
// {
//     console.log("You are not a kid");
// }
// else if(age>26)
// {
//     console.log('You are an adult');
// }
// else if(age>22)
// {
//     console.log('you are above teenage');
// }
// else if(age>18)
// {
//     console.log('you are just above teenage');
// }
// else
// {
//     console.log("You are a kid");
// }
// console.log("End of ladder");




// var arr = [1, 2, 3, 4, 5, 6];
// for (var i=0;i<arr.length;i++)
// {
//     if(i==3)
//     {
//         break;
//     }
// console.log(i);
// }

// arr.forEach(function(element){
//     console.log(element);
// })
console.log("After:");
let j = 0;
// while(j<arr.length)
// {
// console.log(arr[j]);
// j++;
// }

// do{
// console.log(arr[j]);
// j++
// }while(j<arr.length);


// let myArr=["Fan","Camera",34,null,true];

// console.log(myArr.length);
// myArr.pop();
// myArr.push("Susan");
// myArr.shift();
// console.log(myArr.unshift("harry"))//prints new length
// console.log(myArr);


// String Methods in Java script

let str='Susan is a delusional boy boy Susan';
console.log(str.length);
console.log(str.indexOf("is"));
console.log(str.lastIndexOf("boy"));
console.log(str.slice(1,4));
d=str.replace("Susan","Divash");
e=str.replaceAll("Susan","Divash");
console.log(e);
console.log(d);

//Date in javascript

let mydate=new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getMinutes());
console.log(mydate.getHours());


//DoM manipulation
let ele=document.getElementById('clickme');
console.log(ele);

let elem=document.getElementsByClassName('container');
console.log(elem);
elem[0].style.background="Yellow";
elem[1].classList.add("bg-primary");
elem[1].classList.add("text-success");
elem[1].classList.remove("text-success");
// console.log(elem[0].innerHTML);
// console.log(elem[0].innerText);
// console.log(elem[1].innerHTML);
// console.log(elem[1].innerText);

// tn=document.getElementsByTagName('button');
// console.log(tn);
// createdElement=document.createElement('p');
// createdElement.innerText="This is a created paragraph";
// tn[0].appendChild(createdElement);
// createdElement1=document.createElement('b');
// createdElement1.innerHTML="This is created bold";
// tn[0].replaceChild(createdElement1,createdElement);


//Selecting using Query

sel=document.querySelector(".container");
console.log(sel);
sel=document.querySelectorAll(".container");
console.log(sel);

//Events in Javascript
function clicked()
{
    console.log("the button was clciked");
}

window.onload=function()
{
   console.log("The document was loaded"); 
}

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We Have Clicked </b>";
//     console.log("Clicked");
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse over the container");
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container");
// })

// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// document.write(prevHTML)
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("Mouse up of container");
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We Have Clicked </b>";
//     console.log("Mouse down of container");
// })

//Arrow Functions
// function summ(a,b){
//     return a+b;
// }

summ=(a,b)=>{
    return a+b;
}
document.write("The sum of the number are",summ(5,10));

//Settimeout and Interval
// login=()=>
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b> Set time out fired </b>";
//     console.log("Set interval");
// }
// setTimeout(login,2000);
// setInterval(login,2000);
// cle=clearInterval(login,2000);

//local Storage

// localStorage.setItem("name","harry");
// localStorage.getItem("name");


//json
// obj={name:"harry",length:1,a:{this:"that"}}
// jso=JSON.stringify(obj);
// console.log(jso);

// parsed=JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`);
// console.log(parsed);

//backticks-literals
a=34;
console.log(`This is a ${a}`)

