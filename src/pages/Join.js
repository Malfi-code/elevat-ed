// Join.js
// Page to join the club (essentially just a message page which sends an email to the leaders)
import React from 'react';
import ContactForm from '../components/ContactForm';

const Join = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full rounded-3xl px-20 py-5 shadow-lg my-4">
            <p className="text-3xl font-bold mb-5">Join the Club</p>
            <ContactForm type="Join Club"/>
        </div>
    );
}

export default Join;
