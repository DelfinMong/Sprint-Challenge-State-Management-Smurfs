import React, { useContext } from 'react';

// Contexts
import SmurfContext from "../context/SmurfContext";

// Component
import Smurfs from "./Smurfs"

const SmurfList = () => {
    const { smurfList } = useContext(SmurfContext);
    return (
        <div>
			{smurfList.map(data => (
			  <Smurfs key={data.id} data={data} />
			))}
		</div>
    )
}

export default SmurfList;