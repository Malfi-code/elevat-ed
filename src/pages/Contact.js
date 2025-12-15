import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full rounded-3xl px-20 py-5 shadow-lg my-4">
            <p className="text-3xl font-bold mb-5">Contact Us</p>
            <ContactForm type="Contact Us"/>
        </div>
    );
}

export default Contact;
