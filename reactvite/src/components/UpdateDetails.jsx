import React, { useState } from 'react';
function UpdateDetails() {
    const[name, setName]=useState("dummy");
    const[college, setCollege]=useState("dummy");
    function updateName(){
        setName("Shashank Kumar");
    }
    function updateCollege(){
        setCollege("ABES Engineering College");
    }
    return(
        <div>
            <h2>Name={name}</h2>
            <h2>College={college}</h2>
            <button onClick={updateName}>Update Name</button>
            <button onClick={updateCollege}>Update College</button>
        </div>
    );
}
export default UpdateDetails;