import axios from "axios";

function App() {

  const loadData = () => {
    axios.get("https://api.api-onepiece.com/v2/characters/en/crew/1").then((resp) => {
      console.log(resp);
    })
  };

  return (
    <>
      <div className="container mt-20">
        <button onClick={loadData}>Ciurma di Cappello di Paglia</button>
      </div>
      <section className="container">
        <div className="row">
          <div className="col">
            <div className="card row">
              <div className="col">
              <div>nome</div>
              <div>ciurma</div>
              <div>ruolo</div>
              <div>taglia</div>
              <div>haky e frutto</div>
              </div>
              <div className="col">immagine</div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
