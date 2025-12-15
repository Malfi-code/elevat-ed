// AccordionButton.js
import React, { useState, useRef, useEffect } from "react";
import "./AccordionButton.css";

function AccordionButton({ title, content, isLast }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, content]);

  return (
    <div className="item">
      <button className={`title ${isOpen ? 'open' : ''}`} onClick={toggleContent}>
        <h2>{title}</h2>
      </button>
      <div
        ref={contentRef}
        className={`accordion-content ${isLast ? 'last' : ''}`}
        style={{ maxHeight }}
      >
        <div className="content-wrapper">
          {Array.isArray(content) ? (
            <div className="links">
              {content.map((link, idx) => (
                <a key={idx} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionButton;
