import React from 'react'

function ImageManipulation() {


    function changebgcolor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);

    const[height,setHeight]=React.useState(300);
    const[width,setWidth]=React.useState(300);
    const[red,setRed]= React.useState(255);
    const[green,setGreen]=React.useState(0);
    const[blue,setBlue]=React.useState(0);

    function increaseHeight(){
        setHeight(height+10);
    }

    function increaseWidth(){
        setWidth(width+10);
    }


  return (
    <div>
      Image Manipulation
      <div style={{backgroundColor:` rgb(${red}, ${green}, ${blue})`, height:'300px', width:'300px', border:'2px solid red'}}>
        <img src="goku.jpg" alt="Image" style={{height:'300px', width:'300px'}} />
      </div>
      
      
       <div>
        <button onClick={increaseHeight}>Increase Height</button>
        <button onClick={decreaseHeight}>Decrease Height</button>
       </div>
    </div>
  )
}

export default ImageManipulation
