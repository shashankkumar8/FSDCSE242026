//rfce command is used to make style or can say the basic structure for react component (similar work as we do shift +! in html)
import React from 'react' 

function ICard(data) {
  return (
    <div style={{border:'4px solid blue',backgroundColor:"whitesmoke" , width:'400px' ,height:"500px" , textAlign:"centre"}}>
      <h2>College:{data.college}</h2>
      <h2>Roll No:{data.rollno}</h2>
      <img src={require('../images/goku.jpg')} height={200} width={200}></img>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>




    </div>
  )
}

export default ICard