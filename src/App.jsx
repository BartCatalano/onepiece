import axios from "axios";
import { useState } from "react";

function App() {
  const data = [];

  const [characters, setCharacters] = useState([]);

  const loadData = () => {
    axios.get("https://api.api-onepiece.com/v2/characters/en/crew/1").then((resp) => {
      console.log(resp);
      setCharacters(resp.data);
    })
  };

  return (
    <>
      <div className="container mt-20">
        <button onClick={loadData}><h2>Ciurma di Cappello di Paglia</h2></button>
      </div>
      <section className="container">
        
          <div className="row">
            {characters.map((curItem) => (<div key={curItem.id}>
             
            <div className="col">
              <div className="card">
              <div className="cardName">{curItem.name}</div>
              <div>{curItem.bounty}</div>
              <div>{curItem.job}</div>
              <div>{curItem.age}</div>
            </div>
            </div>
            </div>
           
            ))}
 </div>
          
        
      </section>
    </>
  )
}

export default App
