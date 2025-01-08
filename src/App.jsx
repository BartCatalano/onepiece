import axios from "axios";
import { useState } from "react";

function App() {
  const data = [];

  const [characters, setCharacters] = useState([]);

  const loadData = () => {
    axios.get("https://api.api-onepiece.com/v2/characters/en/crew/1").then((resp) => {
      console.log(resp.data);
      setCharacters(resp.data);
    })
  };

  return (
    <>
      <div className="container mt-20">
        <button className="bottone" onClick={loadData}><h2>Ciurma di Cappello di Paglia</h2></button>
      </div>
      <section className="container">

        <div className="row">
          {characters.map((curItem) => (
            <div key={curItem.id}>
            <div className="col">
              <div className="card">
                <div className="cardName">{curItem.name}</div>
                <div className="cardInfo">
                <div className="mtb-10">Bounty:<span className="cardValue"> {curItem.bounty}</span></div>
                <div className="mtb-10">Job: <span className="cardValue">{curItem.job}</span></div>
                <div className="mtb-10">Age: <span className="cardValue">{curItem.age}</span> </div>
                </div>
                <div className="cardInfo"></div>
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
