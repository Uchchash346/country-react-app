import React from 'react';

const Country = (props) => {
    return (
        <>
            {/* <h4>This is a single country.</h4> */}
            <h4>Country: {props.name}</h4>
        </>
    );
};

export default Country;