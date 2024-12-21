// Document
// a=prompt("Enter your name");
// console.dir(document)
// console.log(window.document)
// console.log(document.body)
// console.dir(document.body.childNodes[1]);

// document.body.childNodes[1].innerText="DOCUMENT OBJECT MODEL";


//Changes in DOM or DOM Manipulation

// let a=document.getElementById("heading");
// console.log(a);

// let b=document.getElementsByClassName("container");
// console.log(b)

// let c=document.getElementsByTagName("p");
// console.log(c)

// let elements=document.querySelector("p");
// console.log(elements);

// let elem=document.querySelectorAll("p");
// console.log(elem);


// let firstEl=document.querySelector("#button");
// console.dir(firstEl);


// console.log(document.body.firstChild);


// console.log(document.querySelector("div").children);

// TextNode
// let textNode=document.createTextNode("Hello world");
// document.body.appendChild(textNode);

// const h1=document.createElement("H1");
// const textNode=document.createTextNode("Hello world");
// h1.appendChild(textNode);
// document.body.appendChild(h1);

// CommentNode
// const comment = document.createComment("My personal comments");
// document.body.appendChild(comment);
// document.getElementById("demo").innerHTML =
// "A comment was added to this document, but as you know, comments are invisible.";


// let div=document.querySelector("div")
// console.dir(div);

// DOM Manipulation_Attribute

// let div=document.querySelector('div');
// console.log(div)

// let id=div.getAttribute("id")
// console.log(id)

// let js=div.getAttribute("name")
// console.log(js)

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"))

// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

// let div=document.querySelector("div");
// div.style.backgroundColor="red";
// div.style.fontSize="26px"
// div.innerHTML="<button>Click</button>"

// let newbtn=document.createElement("button");
// newbtn.innerText="Click me";
// console.log("newbtn");

// let div=document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
// div.after(newbtn);

let nh=document.createElement("h1");
nh.innerHTML="<i>Hi, I am new!</i>";
document.querySelector("body").prepend(nh);


// Event Listener 
// let btn1=document.querySelector("#btn");
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);


//     let a=25;
//     a++;
//     console.log(a);
// }

// let box=document.querySelector("div");
// box.onmouseover=()=>
// {
//     console.log("You are inside div")
// }

// Event Handler 

let btn1=document.querySelector("#btn")
// let body=document.querySelector("body")
let cmode="light";
btn1.addEventListener("click",() =>
{
    if(cmode==="light")
    {
        cmode="dark";
        // body.classList.add("black");
        document.querySelector("body").style.backgroundColor="black";

    }
    else{
        cmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
  console.log("button was clicked -handler1");
});
