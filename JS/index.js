// // // // console.log("Hello World")
// // // // var a=23;
// // // // console.log('a='+a)

// // // // function info( name, age, branch){
// // // //     return "Hi, my name is "+name+" age is "+age+" branch is "+branch
// // // // }



// // // // const info=(name,age,branch)=>{
// // // //     return "Hi, my name is "+name+" age is "+age+" branch is "+branch
// // // // }

// // // // const info=()=>{
// // // //     let name="Swasti"
// // // //     console.log(name);
// // // // }

// // // // info()

// // // // function info(str="Hiii"){
// // // //     console.log("Hello "+str)
// // // // }

// // // // info("How r u")

// // // // iife
// // // // (function(){
// // // //     console.log("Hiii")
// // // // })()

// // // // setTimeout(function(){console.log("Hellooo")},1000)

// // // function setLanguage(lang="java"){
// // //     let data;
// // //     if(lang=="java"){
// // //         function javaC(){
// // //             return "java compiler is running..."
// // //         }
// // //         data=javaC();
// // //     }
// // //     else if(lang=="C++"){
// // //         function cppC(){
// // //             return "C++ compiler is running..."
// // //         }
// // //         data=cppC();
// // //     }
// // //     return data
// // // }

// // // console.log(setLanguage("Python"))

// // // const div=document.getElementsByTagName('div');
// // // console.log(div);
// // // div[0].innerText="Hello World";
// // // div[0].style.color='brown';
// // // div[0].style.backgroundColor='white'

// // const container=document.getElementsByClassName('container')
// // console.log(container);
// // container[0].innerHTML="<h2 style=color:cyan>Welcome to ABES Engineering College</h2>"

// // const h1=document.createElement('h1');
// // h1.innerText="Computer Science"
// // h1.style.color='brown';
// // console.log(h1);
// // container[0].appendChild(h1);



const button=document.getElementById('btn')
// console.log(button);

// // function displayData(){
// //     document.getElementById('disp').innerHTML="<h2>Data is loading...</h2>";
// //     setTimeout(()=>{
// //         const img=document.createElement('img');
// //         img.src='./Logo.jpeg';
// //         img.setAttribute("height","200px");
// //         img.setAttribute("width","200px");
// //         console.log(img);
// //         container[0].appendChild(img)
// //         console.log("Hiiii!! Inside display");
// //         document.getElementById('disp').innerHTML="";
// //     },1000);
// // }


// // const button=document.getElementById('btn')
// // console.log(button);
// // function longData(){
// //     console.log("start");
    
// //     for(i=0;i<10000;i++){
// //         console.log(i);
// //     }
// //     console.log("end");
    
// // }
// // button.addEventListener('click',longData)
// function msg(){
//     console.log("Welcome to JS");
// }
// // console.log("start");
// // setTimeout(msg,0);
// // console.log("end");

// function msgHandler(arg, clbk){
//     // console.log("Hello "+arg);

//     const data=clbk(arg);
//     console.log(data);
// }
// const arr=["Amit","Rahul","Vansh"];
// arr.forEach(element=>{
//     msgHandler(element,msg)
// })
// // msgHandler("rahul",msg)

// setTimeout(()=>{
//     console.log("First Msg");
//     setTimeout(()=>{
//         console.log("Second Msg");
//         setTimeout(()=>{
//             console.log("Third Msg");
//         },1000)
//     },1000)    
// },1000)

// const myPromise=new Promise((resolve,reject)=>{
//     const Password="78jkebrd";
//     if(Password.length>=8){
//         resolve("Password is accepted or valid")
//     }
//     else{
//         reject("Password is rejected due to length")
//     }
// })
// myPromise.then(msg=>{
//     console.log(msg);
// }).catch(err=>{
//     console.log(err);
// }).finally(msg=>{
//     console.log("Finally resources are closed");
    
// })

// async function promiseHandler(){
//     try{
//         const data=await myPromise;
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }

async function fetchData(){
    console.log("Inside data");
    
    const response=await fetch("https://fakestoreapi.com/products");
    const jsonData=await response.json();
    console.log(response);
}

button.addEventListener('click',fetchData)
