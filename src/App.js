import Portraits from './lib/components/Portraits';
import React, { useState } from 'react';
import './App.css';

const portraits = [
  {
    leftPortrait: {
      img: "1.png",
      name: "Charlie Boyer",
      skills: [
        {
          img: "Agilité.svg",
          name: "Agilité"
        },
        {
          img: "Architecture.svg",
          name: "Architecture"
        }
      ]
    },
    rightPortrait: {
      img: "2.png",
      name: "Charlotte Colliou",
      skills: [
        {
          img: "Data.svg",
          name: "Data"
        }
      ]
    }
  },
  {
    leftPortrait: {
      img: "3.png",
      name: "Jeanne Marcade",
      skills: [
        {
          img: "Design.svg",
          name: "Design"
        }
      ]
    },
    rightPortrait: {
      img: "4.png",
      name: "William JEZEQUEL",
      skills: [
        {
          img: "DevOps.svg",
          name: "DevOps"
        }
      ]
    }
  }

]

function App() {


  const [index, setIndex] = useState(0)


  function nextTeamMembers(e) {
    e.preventDefault();
    console.log("Next team members...")

    setIndex((index + 1)%portraits.length)

  }

  return (
    
    <div style={{ display:'flex', 
              flexDirection:'column', 
              alignItems:'start', 
              justifyContent:'center', 
              gap:'1.5rem', 
              padding: '5rem' }}>

      <h1>React Portraits</h1>
      <div className='jss67'>
        <p>Component settings:</p>

        <button onClick={nextTeamMembers}>next</button>

        <p>Wow, look at this component library.</p>
        <h5>A magnificent team:</h5>
      </div>



      <Portraits portraits={portraits} index={index} />
    </div>
  );
}

export default App;
