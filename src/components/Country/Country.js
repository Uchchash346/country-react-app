import React from 'react';

const Country = (props) => {
    console.log(props);
    return (
        <>
            {/* <h4>This is a single country.</h4> */}
            <h4>This is:{props.name}</h4>
            <p>Capital is: {props.capital} Population: {props.population}</p>
        </>
    );
};

export default Country;