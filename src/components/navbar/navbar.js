import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


class Navbar extends React.Component {
    render() {
        return(
            <nav role="navigation">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>   
        )
    }
}

export default Navbar