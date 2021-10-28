import React from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

class RecuperaLogin extends React.Component {

    componentDidMount() {
        document.getElementById("username").focus();
    }

    constructor(args) {
        super(args);
        this.state = {
            Email: ''           
        };
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container login-container">
                    <div className="row justify-content-center align-items-center" >
                        <div className="col-md-5 login-form-1">
                            <h5>¿Has olvidado la Contraseña?</h5>
                            <hr />
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Ingresa tu nombre de usuario - Email *" autoComplete="username" id="username" required />
                                </div>                                
                                <div className="form-group">
                                    <Link to="/" className="btn btn-outline-success btn-block" > Restablecer Contraseña </Link>
                                </div>
                            </form>
                            <hr />                            
                            <div className="orm-group text-right">
                               No?.. <Link to="/login" className="badge btn-outline-dark">Inicia Sesion</Link>
                            </div>
                        </div>
                    </div>
                </div>             
                <Footer />
            </div>
        );
    }
}

export default RecuperaLogin;