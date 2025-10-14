const parent=document.getElementById('parent')
// console.log(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'brown', backgroundColor:'cyan'}},"ABES ENGINEERING COLLEGE");
// const li1=React.createElement("li",{},"React")
// const li2=React.createElement("li",{},"Java")
// const li3=React.createElement("li",{},"Python")
// const ul=React.createElement("ul",{style:{backgroundColor:'black',color:'gold'}},li1,li2,li3)
// const img=React.createElement("img",{src:"AboutPhoto.jpeg",style:{height:'100px',borderRadius:'50%'}})
// const h3=React.createElement("h3",{},"Swasti Jain")
// const box=React.createElement("box",{style:{display:"flex",alignItems:'center'}},img,h3)
// const wrapper=React.createElement('div',{},h2,box,ul)
// root.render(wrapper)
// // root.render(ul)

// JSX
const h21=<h2>Hello, I am using JSX</h2>
root.render(h21)