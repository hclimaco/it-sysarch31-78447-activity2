import React from 'react';
import './index.css'; // Import the CSS file for student styling

const Student = ({ student }) => {
  return (
    <div className="student-box">
      <img src={student.image} alt={`${student.name} photo`} className="student-photo" />
      <div className="student-details">
        <h3 className="student-name">{student.name}</h3>
        <p className="student-email">{student.email}</p>
      </div>
    </div>
  );
};

export default Student;
