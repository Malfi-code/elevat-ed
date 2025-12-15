import React from 'react';
import { useParams } from 'react-router-dom';
import lessons from './DocumentCards';
import PDFViewer from '../components/PDFViewer';
import BackNext from '../components/BackNext';

const DocumentDetail = () => {
  const { id } = useParams();
  // Find the lesson with the matching id (convert id to number if needed)
  const lesson = lessons.find(lesson => lesson.id === parseInt(id, 10));

  if (!lesson) {
    return <div>Lesson not found.</div>;
  }

  return (
    <div className="flex flex-col p-5 gap-5 align-center items-center justify-center text-center w-fit">
      <p className="text-3xl font-bold">{lesson.title}</p>
      <PDFViewer file={lesson.content}/>
      <BackNext back="/resources/lessons"/>
    </div>
  );
};

export default DocumentDetail;
