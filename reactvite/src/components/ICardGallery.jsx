import React from 'react'
import ICard from './ICard';

function ICardGallery() {

    const student=[{
        college:'ABES ENGINEERING COLLEGE',
        rollno:'2400320101027',
        name:'Shashank Kumar',
        branch:'CSE'
    },
    {
        college:'ABES ENGINEERING COLLEGE',
        rollno:'2400320101029',
        name:'Shashank Tomar',
        branch:'CSE'
        }
    }]
  return (
    // <div>
    //     <ICard college="ABES ENGINEERING COLLEGE" rollno="2400320101027" name="Shashank Kumar" branch="CSE"/>
    //     <ICard college="ABES ENGINEERING COLLEGE" rollno="2400320101027" name="Shashank Kumar" branch="CSE"/>
    //     <ICard college="ABES ENGINEERING COLLEGE" rollno="2400320101027" name="Shashank Kumar" branch="CSE"/>
    // </div>
  )
}
<ICard data={student}/>

export default ICardGallery
