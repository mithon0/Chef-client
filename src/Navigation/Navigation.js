import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FaTimes, FaBars } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut, displayName, email,imge } = useContext(AuthContext);

    console.log(displayName);

    const handleLogOut = () => {
        logOut();
    }

    return (
        <div className='nav-container'>
            <div className='nav-name'>
                <h1>
                    Taste<span className='store'>Store</span>
                </h1>
            </div>
            <div className='nav-link'>
                <ul>
                    <div onClick={() => setOpen(!open)}>
                        {
                            open === true ? <FaTimes className='mt-2 d-md-none d-block'></FaTimes> : <FaBars className='mt-2 d-md-none d-block'></FaBars>
                        }

                    </div>
                    <div className={`n d-md-flex  ${open ? 'd-block' : 'd-none'}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </div>

                </ul>
            </div>
            <div className='d-flex'>
               
            <h6 className='mt-2'>{email}</h6>
              
                {
                    user ? <Link > <FaUser></FaUser> <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button> </Link> : <Link to="/login"> <button className='btn btn-primary'>Login</button></Link>
                }


            </div>
        </div>
    );
};

export default Navigation;