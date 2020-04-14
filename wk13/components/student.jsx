import React from 'react';
import { Route, Switch, Link, useParams } from "react-router-dom"; 

const Student = () => {
    let { studentname, studentno } = useParams();

    return (
      <div>
        <p>The student name is: { studentname }</p>
        { studentno ? <p>The student no is: {studentno} </p> : null }

      </div>
    );
};

export default Student;