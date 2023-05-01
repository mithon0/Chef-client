import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    return (
        <div className='nav-container'>
            <div className='nav-name'>
                <h1>
                Taste<span className='store'>Store</span>
                </h1>
            </div>
            <div className='nav-link'>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>jfshd</Link></li>
                    <li><Link>fds</Link></li>
                    <li><Link>gsdg</Link></li>
                    <li><Link>gsdg</Link></li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navigation;