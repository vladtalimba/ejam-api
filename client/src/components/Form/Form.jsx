import { useState } from "react";
import axios from "axios";
import "./Form.css";

function Form({setSuperHeroes}) {

    // State for the form fields.
    const [name, setName] = useState("");
    const [superpower, setSuperpower] = useState("");
    const [humilityScore, setHumilityScore] = useState(0);

    // Function to handle form input change.
    function handleInputChange(event) {
        const { name, value } = event.target;

        // Set the state for each input value based on which one was changed.
        if (name === "name") setName(value);
        if (name === "superpower") setSuperpower(value);
        if (name === "humilityScore") setHumilityScore(value);
    }

    async function submitForm(event) {
        event.preventDefault();

        // Data object that will be sent through the request.
        const formData = {
            name: name,
            superPower: superpower,
            humilityScore: humilityScore
        };

        try{
            // Post request to the api.
            const results = await axios.post('http://localhost:3000/superheroes', {
                headers: {
                    "Content-Type": 'application/json',
                },
                data: JSON.stringify(formData)
            });

            // Set the state if we have results.
            if(results && results.data){
                setSuperHeroes(results.data);
            }
        }catch(err){
            // Catch and handle api errors.
            throw new Error(err.response.data.message);
        }
    }

    return (
        <div>
            <form>
                <div className="formContainer">
                    <label htmlFor="name">Enter your superhero name:</label>
                    <input className="userInput" name="name" id="name" type="text" onChange={event => {
                        handleInputChange(event);
                    }}></input>

                    <label htmlFor="superpower">Enter your superpower:</label>
                    <input className="userInput" name="superpower" id="superpower" type="text" onChange={event => {
                        handleInputChange(event);
                    }}></input>
                    <label htmlFor="humilityScore">Enter your humility score:</label>
                    <input className="userInput" name="humilityScore" id="humilityScore" type="number" onChange={event => {
                        handleInputChange(event);
                    }}></input>

                    <button type="submit" onClick={async (event) => {
                        await submitForm(event);
                    }}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;