const parent=document.getElementById("parent")
console.log(parent)
const root=ReactDOM.createRoot(parent);
const h2=React.createElement('h2',{style:{color: "red"}},"Welcome to html")
const h21=<h2>Using JSX</h2>
root.render(h21);