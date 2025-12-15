import React from 'react';
import { PieChart } from '@mui/x-charts';

const About = () => {
    return (
        <div className="overflow-scroll px-20 py-5 flex flex-col items-center">
            <p className="text-[calc(18px+2vw)] font-bold">What is ElevatEd?</p>
            <p className="p-5 indent-10">ElevatEd was created to address key challenges students face when seeking supplementary
academic resources (that's not necessarily assigned/recommended by their teachers). (Graded) Students 
often realize that finding course-specific information is difficult, as platforms like YouTube and 
Khan Academy often provide content that is too broad or general - this can take a significant amount 
of time to just sift through heaps of information just to find a small bit you might need. 
Additionally, valuable study resources are scattered across different platforms, making it hard to 
maintain long-term access to helpful materials. IB-related content is especially difficult to find, 
as much of it is locked behind paywalls. ElevatEd solves these issues by offering 
curriculum/Graded-specific instructional videos tailored to students' needs, along with a centralized 
database of valuable resources such as past exams and exemplar projects, ensuring accessible and 
reliable academic support. </p>
            <hl></hl>
            <p className="text-[calc(18px+2vw)] font-bold">Who needs ElevatEd?</p>
            <div className="flex gap-[5vw] items-end grid grid-cols-2">
                <div className="flex flex-col max-w-[500px]">
                    <p className="text-[20px]">Do you use Khan Academy often?</p>
                    <PieChart
                        series={[
                        {
                            data: [
                            {value: 90.7, label: 'No', color: '#d40f30'},
                            {value: 100-90.7, label: 'Yes', color: '#207ab9'}
                            ],
                            cornerRadius: 5,
                        },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
                <div className="flex flex-col max-w-[500px]">
                    <p className="text-[20px]">Do you struggle to find resources online that actually help your learning?</p>
                    <PieChart
                        series={[
                        {
                            data: [
                            {value: 10.3, label: 'No', color: '#d40f30'},
                            {value: 100-63.2-10.3, label: 'Sometimes', color: '#3a3acc'},
                            {value: 63.2, label: 'Yes', color: '#207ab9'}
                            ],
                            cornerRadius: 5,
                        },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
                <div className="flex flex-col max-w-[500px]">
                    <p className="text-[20px]">How important are external resources to your academic life?</p>
                    <PieChart
                        series={[
                        {
                            data: [
                            {value: 0, label: 'Not at all', color: '#168f14'},
                            {value: 100-25.5-60.5, label: 'Somewhat', color: '#d40f30'},
                            {value: 60.5, label: 'Considerably', color: '#eb8126'},
                            {value: 25.5, label: 'Very', color: '#2688eb'}
                            ],
                            cornerRadius: 5,
                        },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
                <div className="flex flex-col max-w-[500px]">
                    <p className="text-[20px]">How often do you seek videos to explain concepts you have learned in class?</p>
                    <PieChart
                        series={[
                        {
                            data: [
                            {value: 0, label: 'Not at all', color: '#168f14'},
                            {value: 5.3, label: 'Rarely', color: '#7f26eb'},
                            {value: 23.7, label: 'Somewhat', color: '#d40f30'},
                            {value: 45.5, label: 'Considerably', color: '#eb8126'},
                            {value: 25.5, label: 'Very', color: '#2688eb'}
                            ],
                            cornerRadius: 5,
                        },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
            </div>
            <p className="indent-10 w-[50%] m-5">
                Before establishing ElevatEd, we wanted to get a general idea of how necessary it
really was for students. To do this, we sent a survey to a group of high school students asking basic
questions about study materials, seen above. The results clearly highlight a need for a better way to
find study materials than what's currently available for students.
            </p>
        </div>
    );
}

export default About;