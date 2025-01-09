import axios from "axios";
import { useState, useEffect } from "react";


function AppRosso () {
    

    const [characters, setCharacters] = useState([]);
  useEffect(()=>{
      loadData();
    })

    const loadData = () => {
      axios.get("https://api.api-onepiece.com/v2/characters/en/crew/2").then((resp) => {
        
        setCharacters(resp.data);
      })
    };
  
    return (
      <>
        <section className="container">
  
          <div className="row">
            {characters.map((curItem) => (
              <div key={curItem.id}>
              <div className="col">
                <div className="card">
                  <div className="cardName">{curItem.name}<img className="jr-name" src="./public/shanks.png" alt="" /></div>
                  <div className="cardInfo">
                  <div className="mtb-10">Bounty:<span className="cardValue"> {curItem.bounty}</span></div>
                  <div className="mtb-10">Job: <span className="cardValue">{curItem.job}</span></div>
                  <div className="mtb-10">Age: <span className="cardValue">{curItem.age}</span> </div>
                  </div>
                  <div className="cardInfo"><img className="jr" src="./public/shanks.png" alt="" /></div>
                </div>
              </div>
            </div>
  
            ))}
          </div>
        </section>
      </>
    )
  }

export default AppRosso;