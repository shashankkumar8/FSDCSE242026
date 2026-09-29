import React from 'react'
import { useState } from 'react'
function ColorChange() {
    const[red,SetRed]=useState(0);
    const[green,SetGreen]=useState(0);
    const[blue,SetBlue]=useState(0);

    
  return(

    <div>
        <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`,width: '200px', height: '200px',border: '1px solid black'}}></div>
        <div>
            <button onClick={() => SetRed(255)}>RED</button>
            <button onClick={() => SetGreen(255)}>GREEN</button>
            <button onClick={() => SetBlue(255)}>BLUE</button>
        </div>
    </div>
  );
}

export default ColorChange;
