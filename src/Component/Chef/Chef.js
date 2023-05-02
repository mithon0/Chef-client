import React, { useEffect, useState } from 'react';

const Chef = () => {
    const [chef,setChef]=useState(null);

    useEffect(()=>{
        fetch('http://localhost:4000/chef')
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[])

    console.log(chef);
    return (
        <div>
            chef
        </div>
    );
};

export default Chef;