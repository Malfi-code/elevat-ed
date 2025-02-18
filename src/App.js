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
                {text: "About Us", link: "/about"},
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
          <Route path='/subjects/math/aa/*' element={
            <div className="flex flex-grow self-stretch">
              <Sidebar page="math/aa"/>
              <Outlet />
            </div>
          }>
            <Route element={<ContentWrapper />}>
              <Route path='1-1' element={
                <>
                  <h1 className="!mb-5">1.1: Numbers – rounding – scientific form</h1>
                  <Video url="https://www.youtube.com/embed/fxdYta_Olv0"/>
                  <div className="flex flex-row m-10 gap-4">
                    <Button buttonStyle="btn--secondary" link="/subjects/math/">Back</Button>
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-2">Next</Button>
                  </div>
                </>
              } />
              <Route path='1-2' element={
                <>
                  <h1 className="!mb-5">1.2: Sequences in general - Series</h1>
                  <Video url="https://www.youtube.com/embed/Tj89FA-d0f8"/>
                  <div className="flex flex-row m-10 gap-4">
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-1">Back</Button>
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-3">Next</Button>
                  </div>
                </>
              } />
              <Route path='1-3' element={
                <>
                  <h1 className="!mb-5">1.3: Arithmetic sequences</h1>
                  <div className="flex flex-row m-10 gap-4">
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-2">Back</Button>
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-4">Next</Button>
                  </div>
                </>
              } />
              <Route path='1-4' element={
                <>
                  <h1 className="!mb-5">1.4: Geometric sequences</h1>
                  <div className="flex flex-row m-10 gap-4">
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-3">Back</Button>
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-5">Next</Button>
                  </div>
                </>
              }/>
              <Route path='1-5' element={
                <>
                  <h1 className="!mb-5">1.5: Applications of G.S. – Percentage growth</h1>
                  <div className="flex flex-row m-10 gap-4">
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-4">Back</Button>
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-6">Next</Button>
                  </div>
                </>
              }/>
              <Route path='1-6' element={
                <>
                  <h1 className="!mb-5">1.6: The Binomial Theorem – (a+b)n</h1>
                  <div className="flex flex-row m-10 gap-4">
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-5">Back</Button>
                    <Button buttonStyle="btn--secondary" link="/subjects/math/aa/1-7">Next</Button>
                  </div>
                </>
              }/>
            </Route>
            <Route path='*' element={
              <div className="flex flex-col justify-center items-center w-full">
                <h1>No content currently available. Check back later.</h1>
              </div>
              } />
          </Route>
          <Route path='/subjects/math/ai/*' element={
            <div className="flex flex-grow self-stretch">
              <Sidebar page="math/ai"/>
            </div>
          } />
          <Route path='/resources' element={
            <div>
              <h1>These are the resources.</h1>
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