import React, { useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

// Context
import FormContext from "../context/FormContext"
import SmurfContext from "../context/SmurfContext"

// Components
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

function App () {
  
    const [smurfList, setSmurfList] = useState([]);
 

    useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response);
        setSmurfList(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    },[]);

   return (
        
        <SmurfContext.Provider value={{ smurfList }}> 
        <FormContext.Provider value = {{ smurfList, setSmurfList }} > 
          <div className="App">
          <h1>Delfin's Smurfs</h1>
             <SmurfForm />
             <SmurfList />
          </div>  
        </FormContext.Provider>   
        </SmurfContext.Provider>
     );

}

export default App;
