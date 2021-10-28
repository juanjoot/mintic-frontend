import React from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

class Login extends React.Component {

    componentDidMount() {
        document.getElementById("username").focus();
    }

    constructor(args) {
        super(args);
        this.state = {
            Email: '',
            contrasena: ''
        };
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container login-container">
                    <div className="row justify-content-center align-items-center" >
                        <div className="col-md-5 login-form-1">
                            <h5>Bienvenido al Inicio Sesion</h5>
                            <hr />
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ingresa tu nombre de usuario - Email *" autoComplete="username" id="username" required />                                    
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Ingresa tu Contrasena *" autoComplete="current-password" required />                                    
                                </div>
                                <div className="form-group">
                                    <Link to="/" className="btn btn-outline-dark btn-block" > Ingresar </Link>
                                </div>
                            </form>
                            <hr />
                            <div className="form-group text-right">
                                <Link to="/RecuperaLogin" className="badge badge-light ">Olvidaste tu Contrasena?</Link>
                            </div>
                            <div className="orm-group text-right">
                                <Link to="/UsuariosForm" className="badge badge-light">Registrate Aqui</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;