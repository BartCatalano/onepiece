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
        <button onClick={loadData}>Clicca</button>
      </div>
    </>
  )
}

export default App
