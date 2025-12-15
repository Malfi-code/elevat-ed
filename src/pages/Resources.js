import React from "react";
import HeroSection from '../components/HeroSection';

const Resources = () => {
    return (
        <div>
            <HeroSection title="Resources" buttons={[
                {text: "Documents & PDFs", link: "/resources/lessons"},
                {text: "Exemplary Exams", link: "/resources/student-exams"},
                {text: "Past Exams", link: "/resources/past-exams"},
                {text: "IB-Style Exams", link: "/resources/ib-exams"},
                {text: "IB Resources", link: "/resources/ib-resources"},
                {text: "Other Resources", link: "/resources/other"}
            ]}/>
        </div>
    )
}

export default Resources;