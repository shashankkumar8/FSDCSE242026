import React, { useState } from 'react';
function ImageManipulation() {
    const [cheight, setHeight] = useState(200);
    const [cwidth, setWidth] = useState(200);
    const[red ,setRed]=useState(0);
    const[green ,setGreen]=useState(0);
    const[blue ,setBlue]=useState( 0);
    const[catangle, setCatAngle] = useState(30); // State for cat image rotation angle

    
    function increaseHeight() {
        setHeight(cheight + 20);
    }
    function increaseWidth() {
        setWidth(cwidth + 20);
    }
    function decreaseHeight() {
        setHeight(cheight - 20);
    }
    function decreaseWidth() {
        setWidth(cwidth - 20);
    }
    function changeColor(){
        setRed(Math.random()*256);
        setGreen(Math.random()*256);
        setBlue(Math.random()*256);
    }

    function ImageRotate() {
        // Implementation for image rotation
        setCatAngle((prevAngle) => prevAngle + 45);
    }

    return (
        <div>
            <h2 style={{color:"red", textAlign:"center"}}>Image Manipulation</h2>
            
            <div style={{height:"300px", width:"300px", border:"2px solid black", margin:"0 auto",backgroundColor:`rgb(${red},${green},${blue})`}}>
                <img src="C:\Users\LENOVO\FSDCSE242026\FSDCSE242026\reactvite\src\images\pngtree-surprised-shorthair-cat-expression-png-image_2654463.jpg" height={cheight} width={cwidth} alt="cat" style={{transform: `rotate(${catangle}deg)`}} />
            </div>
            <div>
                <button onClick={increaseHeight}>increase height</button>
                <button onClick={increaseWidth}>increase width</button>
                <button onClick={decreaseHeight}>decrease height</button>
                <button onClick={decreaseWidth}>decrease width</button>
                <button onClick={changeColor}>change color</button>
                <button onClick={ImageRotate}>Image Rotate</button>
            </div>
        </div>
  );
}
export default ImageManipulation;