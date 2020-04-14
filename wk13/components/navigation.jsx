import React from 'react';
import { Route, Switch, Link, useParams } from "react-router-dom"; 

const Navigation = () => {
    return (
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/newRoute"> NewRoute </Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/student/Jim Smith"> Student: Jim Smith </Link>
          </li>
          <li>
            <Link to="/student/Jim Smith/50001"> Student: Jim Smith, Student No: 50001 </Link>
          </li>
          <li>
            <Link to="/riderect"> Riderect </Link>
          </li>
        </ul>
    );
};

export default Navigation;