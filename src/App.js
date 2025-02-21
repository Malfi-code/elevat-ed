import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogoBox from './components/LogoBox';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { Button } from './components/Button';
import ContentWrapper from './components/ContentWrapper';
import BackNext from './components/BackNext';
import { PieChart } from '@mui/x-charts';
import Mathematics from './contents/Mathematics';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={
              <div>
                <LogoBox />
                <HeroSection title="Home" buttons={[
                  {text: "Subjects", link: "/subjects"},
                  {text: "Resources", link: "/resources"},
                  {text: "About Us", link: "/about-us"},
                  {text: "Submit", link: "/submit"}
                ]}/>
              </div>
            } />
            <Route path='/subjects' element={
              <div>
                <HeroSection title="Subjects" buttons={[
                  {text: "Mathematics", link: "/subjects/math"},
                  {text: "Sciences", link: "/subjects/sciences"},
                  {text: "Social Sciences", link: "/subjects/ss"},
                  {text: "English", link: "/subjects/english"},
                  {text: "Portuguese", link: "/subjects/portuguese"}
                ]}/>
                <div className="flex justify-center m-4">
                  <Button buttonStyle="btn--outline" link="/">Back</Button>
                </div>
              </div>
            } />
            <Route path='/subjects/math' element={
              <div>
                <HeroSection title="Mathematics" buttons ={[
                  {text: "9th Grade", link: "/subjects/math/9th/1-1"},
                  {text: "9th Grade Extended", link: "/subjects/math/9th-e/1-1"},
                  {text: "10th Grade", link: "/subjects/math/10th/1-1"},
                  {text: "10th Grade Extended", link: "/subjects/math/10th-e/1-1"},
                  {text: "Applications & Interpretations", link: "/subjects/math/ai/1-1"},
                  {text: "Analysis & Approaches", link: "/subjects/math/aa/1-1"},
                  {text: "Statistics and Probability", link: "/subjects/math/stats/1-1"},
                  {text: "Contemporary Mathematics", link: "/subjects/math/cm/1-1"}
                ]}/>
                <div className="flex justify-center m-4">
                  <Button buttonStyle="btn--outline" link="/subjects">Back</Button>
                </div>
              </div>
            } />
            <Route path='/subjects/sciences' element={
              <div>
                <HeroSection title="Sciences" buttons={[
                  {text: "Biology (9th)", link: "/subjects/sciences/9th"},
                  {text: "Chemistry (10th)", link: "/subjects/sciences/10th-chem/1-1"},
                  {text: "Physics (10th)", link: "/subjects/sciences/10th-physics/1-1"},
                  {text: "Physics (IB)", link: "/subjects/sciences/ib-physics/1-1"},
                  {text: "Biology (IB)", link: "/subjects/sciences/ib-biology/1-1"},
                  {text: "Chemistry (IB)", link: "/subjects/sciences/chemistry/1-1"},
                  {text: "Computer Science", link: "/subjects/sciences/comp-sci/1-1"},
                  {text: "Environmental Science", link: "/subjects/ss/ess/1-1"}
                ]}/>
                <div className="flex justify-center m-4">
                  <Button buttonStyle="btn--outline" link="/subjects">Back</Button>
                </div>
              </div>
            } />
            
            <Route path='/subjects/ss' element={
              <div>
                <HeroSection title="Social Sciences" buttons={[
                  {text: "9th Grade", link: "/subjects/ss/9th/1-1"},
                  {text: "10th Grade", link: "/subjects/ss/10th/1-1"},
                  {text: "BRSS (9th & 10th)", link: "/subjects/ss/brss/1-1"},
                  {text: "History (IB)", link: "/subjects/ss/ib-history/1-1"},
                  {text: "BRSS (IB)", link: "/subjects/ss/ib-brss/1-1"},
                  {text: "Economics", link: "/subjects/ss/economics/1-1"},
                  {text: "Psychology", link: "/subjects/ss/psychology/1-1"},
                  {text: "Environmental Science", link: "/subjects/ss/ess/1-1"}
                ]}/>
                <div className="flex justify-center m-4">
                  <Button buttonStyle="btn--outline" link="/subjects">Back</Button>
                </div>
              </div>
            } />
            <Route path='/subjects/english' element={
              <div>
                <HeroSection title="English" buttons={[
                  {text: "9th Grade", link: "/subjects/english-9th/1-1"},
                  {text: "10th Grade", link: "/subjects/english/10th/1-1"},
                  {text: "Language & Literature", link: "/subjects/english/lang-lit/1-1"},
                  {text: "Literature", link: "/subjects/english/lit/1-1"},
                  {text: "Ab Initio", link: "/subjects/english/ab-initio/1-1"},
                  {text: "English B", link: "/subjects/english/b/1-1"}
                ]}/>
                <div className="flex justify-center m-4">
                  <Button buttonStyle="btn--outline" link="/subjects">Back</Button>
                </div>
              </div>
            } />
            <Route path='/subjects/math/*' element={<Mathematics/>}/>
            <Route path='/resources' element={
              <div>
                <h1>These are the resources.</h1>
              </div>
            } />
            <Route path='/about-us' element={
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
            } />
            <Route path='/*' element={
              <div className="flex flex-col justify-center items-center">
                <h1>This page was not found.</h1>
                <h1>It is either under construction or does not exist.</h1>
                <h1 className="!mb-10">Check back again later.</h1>
                <Button buttonStyle="btn--secondary" link="/">Home</Button>
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;