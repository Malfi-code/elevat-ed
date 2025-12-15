import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

const PDFViewer = ({ file, className = "" }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const changePage = offset =>
        setPageNumber(prevPageNumber => prevPageNumber + offset);

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);

    return (
        <div className={`relative group ${className} border border-black`}>
            <Document
                file={file}
                onLoadError={error => console.error('Error while loading document:', error)}
                onLoadSuccess={onDocumentLoadSuccess}
                className="m-0"
            >
                <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false}/>
            </Document>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    className="bg-red-700 border border-black text-white p-2 rounded disabled:opacity-50 m-1 cursor-pointer disabled:cursor-auto"
                    style={{ minWidth: '100px' }}
                >
                    Previous
                </button>
                <p className="m-1 bg-red-700 border border-black text-white p-2 rounded">
                    {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    className="bg-red-700 border border-black text-white p-2 rounded disabled:opacity-50 m-1 cursor-pointer disabled:cursor-auto"
                    style={{ minWidth: '100px' }}
                >
                    Next
                </button>
            </div>
            <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-min">
                <a href={file} download className="bg-red-700 border border-black text-white p-2 rounded m-1 cursor-pointer"><div className="fa fa-download"/></a>
            </div>
            {/* Download Button */}
        </div>
    );
};

export default PDFViewer;
