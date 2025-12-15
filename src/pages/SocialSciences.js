// SocialSciences.js
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ContentWrapper from '../components/ContentWrapper';
import Video from '../components/Video';
import BackNext from '../components/BackNext';
import PDFViewer from '../components/PDFViewer';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const SocialSciences = () => {
    return (
        <Routes>
            <Route path='economics/*' element={
                <div className="flex flex-grow self-stretch max-w-full">
                    <Sidebar page="ss/economics"/>
                    <Outlet />
                </div>
            }/>
        </Routes>
    )
}

export default SocialSciences;