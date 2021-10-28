import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

    return (

        // <div className="navbar navbar-expand-lg">
        //     <Link to="/home" className="navbar-brand " >Coffee shop BCS</Link>
        //     <Link to="/home" className="navbar-nav mr-3 badge badge-dark"><i className="fa fa-fw fa-home"></i>Home</Link>
        //     <Link to="/login" className="navbar-nav badge badge-dark"><i className="fa fa-fw fa-user"></i> Login user</Link>
        // </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/home" className="navbar-brand" >BCS © </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" id="item1">
                            <Link to="/" className="nav-link "><i className="fa fa-fw fa-home"></i>Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/login" className="nav-link"><i className="fa fa-fw fa-user"></i> Ingreso</Link>
                        </li>
                    </ul>
                    <div id="derecha">
                    <form className="d-flex" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar