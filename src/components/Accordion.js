import React from 'react';
import AccordionButton from './AccordionButton';
import './Accordion.css';

function Accordion({ items }) {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionButton 
                    key={index}
                    title={item.title}
                    content={item.content}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
}

export default Accordion;