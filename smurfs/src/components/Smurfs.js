import React from 'react';

const Smurfs = ( { data } ) => {

return (
        
        <div className="smurf">
            <p> Name: { data.name } </p>
            <p> Age: { data.age } </p>
            <p> Height: { data.height } </p>
        </div>
       )
  };

export default Smurfs