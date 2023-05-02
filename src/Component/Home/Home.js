import React from 'react';
import img from '../../img/logo3.jpg';
import Navigation from '../../Navigation/Navigation';
const Home = () => {
    return (
        <div>
           
           <div className='W-100% text-center'>
           <img className='opacity-50 rounded-circle' src={img} alt="" />
           <h1 className='text-center'>WellCome To Taste<span className='text-success'></span>Store</h1>
           <p className='text-center fs-3 text-success  p-5'>Japanese cuisine is renowned for its emphasis on fresh, seasonal ingredients and intricate presentation. It is known for its delicate balance of flavors, textures, and colors, as well as its emphasis on healthful, balanced eating.
</p>
           </div>

        </div>
    );
};

export default Home;