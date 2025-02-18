import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection({ title, buttons}) {
    return (
        <div className='hero-container'>
            <h1>{title}</h1>
            <div className='button-group'>
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        link={button.link}
                        className='btn'
                        buttonStyle={button.style || 'btn--secondary'}
                        buttonSize='btn--large'
                    >{button.text}</Button>
                ))}
            </div>
        </div>
    );
}
  
export default HeroSection;
  