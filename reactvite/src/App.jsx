import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {
  return (
    <>
    <div style={{border:'4px solid blue',backgroundColor:"whitesmoke" , width:'400px' ,height:"500px" , textAlign:"centre"}}>
      <h2 style={{color:"Red", textAlign:'center'}}>ABES ENGINEERING COLLEGE</h2>
      <h3 style={{color:"brown", textAlign:'left'}}>Roll No. = 2400320101019</h3>
      <h3 style={{color:"green", textAlign:'left'}}>Name = Shagun Chaudhary</h3>
      <h3 style={{color:"lightblue",textAlign:'left'}}>Brach = CSE</h3>
      <h3 style={{color:"pink",textAlign:'left'}}>Section = 24</h3>
      <h3 style={{color:"orange",textAlign:'left'}}>Skills = Java , MERN Stack , DSA , Vibe Coding </h3>
      <ICard/>
    </div>
    </>
  )
}
export default App