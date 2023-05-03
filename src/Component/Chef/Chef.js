import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import './Chef.css'

const Chef = () => {
    const [chefData,setchefData]=useState([])
    const url ="http://localhost:4000/chef";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setchefData(data))
    },[])
   


    return (
        <div className='mx-auto'>
           <h1 className='text-center'>Japanies chef</h1>
           <div className='chef-card '>
            {
                chefData.map(chef=><ChefCard
                key={chef.id}
                chef={chef}
                ></ChefCard>)
            }
           </div>

        </div>
    );
};

export default Chef;