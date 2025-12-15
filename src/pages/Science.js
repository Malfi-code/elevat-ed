// Science.js
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

const Science = () => {
    return (
        <Routes>
            <Route path='ib-physics/*' element={
                <div className="flex flex-grow self-stretch max-w-full">
                    <Sidebar page="sciences/ib-physics"/>
                    <Outlet />
                </div>
            }/>
            <Route path='comp-sci/*' element={
                <div className="flex flex-grow self-stretch max-w-full">
                    <Sidebar page="sciences/comp-sci"/>
                    <Outlet />
                </div>
            }/>
        </Routes>
    )
}

export default Science;
