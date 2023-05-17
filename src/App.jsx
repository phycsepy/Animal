import { useState } from "react";
import Show from "./AnimalShow";
import './App.css'

function getRandomAnimals() {
const animals=['bird','cat','dog','gator','hourse']

return animals[Math.floor(Math.random()*animals.length)]
}


export default function App(){
    const [animal,setAnimals]=useState([]);
    const handleClick  = () =>{
        setAnimals([...animal,getRandomAnimals()])
    };

    const renderedAnimals=animal.map((animal,index)=>{
        return <Show type={animal} key={index}/>
    })
    return (
    <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
    </div>
    );

}