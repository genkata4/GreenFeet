import React from 'react';
import { Card } from '../../components/card';
import greenFeetLogo from '../../green-feet.png';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/button';

export const HomePage = () => (
    <div className="HomePage">
        <h2>Home</h2>

        <p>Welcome to Green Feet project</p>

        <Card>

            <img src={greenFeetLogo} alt="Green Feet" className="HomePage__logo" />

            <PrimaryButton className="HomePage__button">
                <Link to="/route" className="HomePage__button__link">
                    Plan your route here!
                </Link>
            </PrimaryButton>

        </Card>
    </div>
);
