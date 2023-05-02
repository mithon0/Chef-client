import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FaTimes,FaBars } from "react-icons/fa";
const Navigation = () => {
    const [open,setOpen]=useState(false);
    
    return (
        <div className='nav-container'>
            <div className='nav-name'>
                <h1>
                Taste<span className='store'>Store</span>
                </h1>
            </div>
            <div className='nav-link'>
                <ul>
                   <div onClick={()=>setOpen(!open)}>
                    {
                        open===true?<FaTimes className='mt-2 d-md-none d-block'></FaTimes>:<FaBars className='mt-2 d-md-none d-block'></FaBars>
                    }
                   
                   </div>
                    <div className={`n d-md-flex  ${open ?'d-block':'d-none'}`}>
                    <li><Link>Home</Link></li>
                    <li><Link>Blog</Link></li>
                    </div>
                   
                </ul>
            </div>
            <div>
               <Link to="/login"> <button className='btn btn-primary'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navigation;