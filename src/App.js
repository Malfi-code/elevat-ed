import React from 'react';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import LogoBox from './components/LogoBox';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Button } from './components/Button';

// pages (subjects)
import Mathematics from './pages/Mathematics';
import Science from './pages/Science';
import SocialSciences from './pages/SocialSciences';

// pages (other)
import Resources from './pages/Resources';
import Documents from './pages/Documents';
import DocumentDetail from './pages/DocumentDetail';
import About from './pages/About';
import Submit from './pages/Submit';
import Join from './pages/Join';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="wrapper">
      <Router basename='/elevat-ed'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={
              <div>
                <Login />
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
            <Route path='/subjects/sciences/*' element={<Science/>}/>
            <Route path='/subjects/ss/*' element={<SocialSciences/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/resources/lessons' element={<Documents/>}/>
            <Route path="/resources/lessons/:id" element={<DocumentDetail/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/submit' element={<Submit/>}/>
            <Route path='/join' element={<Join/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
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
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;