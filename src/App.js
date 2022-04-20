import Portraits from './lib/components/Portraits';
import './App.css';

function App() {

  const portraits = [
    {
      leftPortrait: {
        img: "1.png",
        name: "Charlie Boyer",
        skills: [
          {
            img: "skill1.png",
            name: "Web"
          },
          {
            img: "skill2.png",
            name: "cloud"
          }
        ]
      },
      rightPortrait: {
        img: "2.png",
        name: "Charlotte Colliou",
        skills: [
          {
            img: "skill4.png",
            name: "ui"
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
            img: "skill1.png",
            name: "web"
          }
        ]
      },
      rightPortrait: {
        img: "4.png",
        name: "William JEZEQUEL",
        skills: [
          {
            img: "skill3.png",
            name: "ia"
          }
        ]
      }
    }

  ]

  return (
    <div style={{ display:'flex', 
              flexDirection:'column', 
              alignItems:'start', 
              justifyContent:'center', 
              gap:'1.5rem', 
              padding: '5rem' }}>

      <p>Component settings:</p>

      <p>Wow, look at this component library.</p>
      <h5>A magnificent team:</h5>
      <Portraits portraits={portraits} index={0} />
    </div>
  );
}

export default App;
