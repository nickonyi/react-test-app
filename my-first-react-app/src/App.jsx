import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function List(props){
  
  if(!props.animals){
     return <div>Loading...</div>
  }
  
  if(props.animals.length === 0){
    return <div>There is nothing in the list!!!</div>
  }
  return (
    
      <ul>
        {
          props.animals.map(animal=>{
            return animal.startsWith("L")? <li key={animal}>{animal}</li>:null;
          })
        }
      </ul>
  
  )
}

function App() {

const animals = [];


  return (
    <div>
      <h1>Animals:</h1>
       <List animals={animals}/>
    </div>
  )
}

export default App
