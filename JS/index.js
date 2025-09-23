// // console.log("Hello World")
// // var a=23;
// // console.log('a='+a)

// // function info( name, age, branch){
// //     return "Hi, my name is "+name+" age is "+age+" branch is "+branch
// // }



// // const info=(name,age,branch)=>{
// //     return "Hi, my name is "+name+" age is "+age+" branch is "+branch
// // }

// // const info=()=>{
// //     let name="Swasti"
// //     console.log(name);
// // }

// // info()

// // function info(str="Hiii"){
// //     console.log("Hello "+str)
// // }

// // info("How r u")

// // iife
// // (function(){
// //     console.log("Hiii")
// // })()

// // setTimeout(function(){console.log("Hellooo")},1000)

// function setLanguage(lang="java"){
//     let data;
//     if(lang=="java"){
//         function javaC(){
//             return "java compiler is running..."
//         }
//         data=javaC();
//     }
//     else if(lang=="C++"){
//         function cppC(){
//             return "C++ compiler is running..."
//         }
//         data=cppC();
//     }
//     return data
// }

// console.log(setLanguage("Python"))

// const div=document.getElementsByTagName('div');
// console.log(div);
// div[0].innerText="Hello World";
// div[0].style.color='brown';
// div[0].style.backgroundColor='white'

const container=document.getElementsByClassName('container')
console.log(container);
container[0].innerHTML="<h2 style=color:cyan>Welcome to ABES Engineering College</h2>"

const h1=document.createElement('h1');
h1.innerText="Computer Science"
h1.style.color='brown';
console.log(h1);
container[0].appendChild(h1);

const img=document.createElement('img');
img.src='./Logo.jpeg';
img.setAttribute("height","200px");
img.setAttribute("width","200px");
console.log(img);
container[0].appendChild(img)

const button=document.getElementById('btn')
console.log(button);

function displayData(){
    console.log("Hiiii!! Inside display");
}

button.addEventListener('click',displayData)