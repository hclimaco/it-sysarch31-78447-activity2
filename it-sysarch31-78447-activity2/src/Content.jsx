import React from 'react';
import Student from './Student';
import './index.css';


const Content = ({ students }) => {
  return (
    <div className="student-container">
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
};


export default Content;