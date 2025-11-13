import React, {useState} from 'react'

function ImageManipulation() {
    const[catHeight,setcatheight]=useState(200)
    const[catWidth,setcatwidth]=useState(200)
    const[red, setRed]=useState(0);
    const[green, setGreen]=useState(0);
    const[blue, setBlue]=useState(0);

    // fucn
    function handleHeight(){

    }

    function changeBgColor(){
        setRed(Math.random()*255)
        setGreen(Math.random()*255)
        setBlue(Math.random()*255)
    }

    return (
        <>
    <h2>ImageManipulation</h2>
    <div style={{border:'2px solid red', height:"400px",width:"400px"}}>
    <img src="https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png" style={{backgroundColor:`rgb(${red},${green},${blue})`, paddingLeft:'100px', paddingTop:'100px'}} height={catHeight} width={catWidth}/>
    </div>
    <div>
        <button onClick={()=>setcatheight(catHeight+50)}>Increase Height</button>
        <br/>
        <button onClick={()=>setcatheight(catHeight-50)}>Decrease Height</button>
        <br/>
        <button onClick={()=>setcatwidth(catWidth+50)}>Increase Width</button>
        <br/>
        <button onClick={()=>setcatwidth(catWidth-50)}>Decrease Width</button>
        <br/>
    </div>
    </>
  )
}

export default ImageManipulation