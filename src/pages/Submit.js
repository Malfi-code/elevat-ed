import React from "react";
import ContactForm from "../components/ContactForm";

const Submit = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full rounded-3xl px-20 py-5 shadow-lg my-4">
            <p className="text-3xl font-bold mb-5">Submit Resources</p>
            <ContactForm type="Submit"/>
        </div>
    )
}

export default Submit;