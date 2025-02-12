import { useEffect, useState } from "react"
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import axios from "axios";

function App() {

  // Superhero list state.
  const [superHeroes, setSuperHeroes] = useState([]);
  // Get all superheroes on first render.
  useEffect(() => {
    async function getSuperHeroes(){
      // Get request to the api endpoint
      const results = await axios.get('http://localhost:3000/superheroes', {
        headers: {
            "Content-Type": 'application/json',
        },
      }); 

      // Set the state if we have results.
      if(results && results.data){
          setSuperHeroes(results.data);
      }
    }
    
    try{
      getSuperHeroes();
    }catch(err){
      throw new Error(err.response.data.message);
    }
  }, []);

  return (
    <div className="appContainer">
      <Form setSuperHeroes={setSuperHeroes}/>
      <Table superHeroes={superHeroes}/>
    </div>
  )
}

export default App
