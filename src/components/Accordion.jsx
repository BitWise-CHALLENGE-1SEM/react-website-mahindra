import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <button 
                className="accordion-header" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <i className="arrow">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</i>
            </button>
            <div className={`accordion-body ${isOpen ? 'active' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
