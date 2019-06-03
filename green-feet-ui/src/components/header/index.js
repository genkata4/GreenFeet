import React from 'react';
import { Link } from 'react-router-dom';

import greenFeetLogo from '../../green-feet-white.png';

export const Header = () => (
    <header className="Header">
        <Link to="/" className="Header__link">
            <img src={greenFeetLogo} alt="Green Feet" />
            <img src={greenFeetLogo} alt="Green Feet" />
            <img src={greenFeetLogo} alt="Green Feet" />
            <img src={greenFeetLogo} alt="Green Feet" />
            <img src={greenFeetLogo} alt="Green Feet" />
        </Link>

        <Link to="/" className="Header__link">
            <h1>
                Green Feet
            </h1>
        </Link>
    </header>
);
