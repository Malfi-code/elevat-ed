// Mathematics.js
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ContentWrapper from '../components/ContentWrapper';
import Video from '../components/Video';
import BackNext from '../components/BackNext';

const Mathematics = () => {
  return (
    <Routes>
      <Route path='aa/*' element={
        <div className="flex flex-grow self-stretch">
          <Sidebar page="math/aa"/>
          <Outlet />
        </div>
      }>
        <Route element={<ContentWrapper />}>
          <Route path='1-1' element={<>
            <h1 className="!mb-5">1.1: Numbers – rounding – scientific form</h1>
            <Video url="https://www.youtube.com/embed/fxdYta_Olv0"/>
            {/* Add more content for 1-1 here */}
            <BackNext next="1-2"/>
          </>}/>

          <Route path='1-2' element={<>
            <h1 className="!mb-5">1.2: Sequences in general - Series</h1>
            <Video url="https://www.youtube.com/embed/Tj89FA-d0f8"/>
            {/* Add more content for 1-2 here */}
            <BackNext back="1-1" next="1-3"/>
          </>}/>

          <Route path='1-3' element={<>
            <h1 className="!mb-5">1.3: Arithmetic sequences</h1>
            <BackNext back="1-2" next="1-4"/>
          </>}/>

          <Route path='1-4' element={<>
            <h1 className="!mb-5">1.4: Geometric sequences</h1>
            <BackNext back="1-3" next="1-5"/>
          </>}/>

          <Route path='1-5' element={<>
            <h1 className="!mb-5">1.5: Applications of G.S. – Percentage growth</h1>
            <BackNext back="1-4" next="1-6"/>
          </>}/>

          <Route path='1-6' element={<>
            <h1 className="!mb-5">1.6: The Binomial Theorem – <i>(a+b)<sup>n</sup></i></h1>
            <BackNext back="1-5" next="1-7"/>
          </>}/>

          <Route path='1-7' element={<>
            <h1 className="!mb-5">1.7: Deductive proof</h1>
            <BackNext back="1-6" next="1-8"/>
          </>}/>

          <Route path='1-8' element={<>
            <h1 className="!mb-5">1.8: Methods of proof</h1>
            <BackNext back="1-7" next="1-9"/>
          </>}/>

          <Route path='1-9' element={<>
            <h1 className="!mb-5">1.9: Mathematical induction</h1>
            <BackNext back="1-8" next="1-10"/>
          </>}/>

          <Route path='1-10' element={<>
            <h1 className="!mb-5">1.10: Systems of linear equations</h1>
            <BackNext back="1-9" next="1-11"/>
          </>}/>

          <Route path='1-11' element={<>
            <h1 className="!mb-5">1.11: Complex numbers – basic operations</h1>
            <BackNext back="1-10" next="1-12"/>  
          </>}/>

          <Route path='1-12' element={<>
            <h1 className="!mb-5">1.12: Polynomials over the Complex field</h1>
            <BackNext back="1-11" next="1-13"/>
          </>}/>

          <Route path='1-13' element={<>
            <h1 className="!mb-5">1.13: The complex plane</h1>
            <BackNext back="1-12" next="1-14"/>
          </>}/>

          <Route path='1-14' element={<>
            <h1 className="!mb-5">1.14: De Moivre’s theorem</h1>
            <BackNext back="1-13" next="1-15"/>
          </>}/>

          <Route path='1-15' element={<>
            <h1 className="!mb-5">1.15: Roots of <i>z<sup>n</sup>=a</i></h1>
            <BackNext back="1-14" next="2-1"/>
          </>}/>

          <Route path='2-1' element={<>
            <h1 className="!mb-5">2.1: Lines (or Linear functions)</h1>
            <BackNext back="1-15" next="2-2"/>
          </>}/>


          {/* all pages until 5-20 */}
        </Route>
        <Route path='*' element={
          <div className="flex flex-col justify-center items-center w-full">
            <h1>No content currently available. Check back later.</h1>
          </div>
          } />
      </Route>
      <Route path='ai/*' element={
        <div className="flex flex-grow self-stretch">
          <Sidebar page="math/ai"/>
        </div>
      } />
    </Routes>
  );
};

export default Mathematics;
