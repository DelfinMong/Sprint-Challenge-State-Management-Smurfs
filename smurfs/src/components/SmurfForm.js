import React ,{ useState, useContext}from 'react';
import axios from "axios";
import FormContext from "../context/FormContext"


const SmurfForm = ( ) => {
    const [formValue, setFormValue] = useState({
        name:'',
        age:'',
        height:'',
        id: ""
      });
   
   const { setSmurfList } =  useContext(FormContext);

   const handleChanges = event => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const newSmurf = event => {
    event.preventDefault();
    var smurfData = { ...formValue, id: Date.now() };
    axios
      .post("http://localhost:3333/smurfs", smurfData)
      .then(response => {
        setSmurfList(response.data);
        setFormValue({
          name: "",
          age: "",
          height: "",
          id: ""
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

   return (
        <form onSubmit={newSmurf}>
            <input type="text" className='pa3 ba b--green bg-lightest-blue'
             name='name' value= {formValue.name} placeholder="Name" onChange={handleChanges}/>
            <input type="text" className='pa3 ba b--green bg-lightest-blue'
            name= 'age' value={formValue.age} placeholder="83" onChange={handleChanges}/>
            <input type="text" className='pa3 ba b--green bg-lightest-blue'
            name= 'height' value={formValue.height} placeholder=" 6 feet" onChange={handleChanges}/>
            <button className='pa3 ba b--green bg-lightest-blue' type="submit">New Smurf</button>
        </form>
    )
}

export default SmurfForm;  