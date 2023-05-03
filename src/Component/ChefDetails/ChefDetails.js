import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails =useLoaderData();
    console.log(chefDetails);
    // const {}=chefDetails;

    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default ChefDetails;