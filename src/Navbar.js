import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom";


function GetNews() {
  return(
     (
        <>
          <Navbar bg="dark" variant="dark" className="nav">
            <div className="container-fluid">
              <Navbar.Brand className="brand">News Updates</Navbar.Brand>
              <Nav className="me-auto">
                <Link className="link" to="/">Home </Link>
                <Link className="link" to="/business">Business</Link>
                <Link className="link" to="/health">Health</Link>
                <Link className="link" to="/technology">Technology</Link>
                <Link className="link" to="/education">Entertainment</Link>
              </Nav>
            </div>
          </Navbar>
          
        </>
      )
  )
  
}

export default GetNews;
