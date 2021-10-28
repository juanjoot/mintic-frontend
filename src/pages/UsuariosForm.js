import React from "react";
import "./Login.css";
import APInvoke from "../utils/APInvoke";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import { Link } from 'react-router-dom';

class UsuariosForm extends React.Component {

    componentDidMount() {
        document.getElementById("nombreUsuario").focus();
    }

    constructor(args) {
        super(args);
        this.state = {
            nombreUsuario: '',
            apellidoUsuario: '',
            numeroDocumento: '',
            generoUsuario: '',
            fechaNacimiento: '',
            numeroTel: '',
            correoUsuario: '',
            contrasenaUsuario: '',
            iddocumento: '',
            idperfil: ''
        };
    }

    handleChange(input, e) {
        this.setState({
            [input]: e
        });

    }

    async add() {

        const data = {

            nombreUsuario: this.state.nombreUsuario,
            apellidoUsuario: this.state.apellidoUsuario,            
            numeroDocumento: this.state.numeroDocumento,
            generoUsuario: this.state.generoUsuario,
            fechaNacimiento: this.state.fechaNacimiento,
            numeroTel: this.state.numeroTel,
            correoUsuario: this.state.correoUsuario,
            contrasenaUsuario: this.state.contrasenaUsuario,
            tipodocumento: {
                idDocumento: 1 
            },
            perfil: {
                perfilId: 1            
            }           
        };

        console.log(data.nombreUsuario);
        console.log(data.apellidoUsuario);
        console.log(data.numeroDocumento);
        console.log(data.generoUsuario);
        console.log(data.fechaNacimiento);
        console.log(data.numeroTel);
        console.log(data.correoUsuario);
        console.log(data.contrasenaUsuario);
        console.log(data.perfil.perfilId);
        console.log(data.tipodocumento.idDocumento);

        const response = await APInvoke.invokePOST(`/api/v1/usuarios`, data);

        if (response.id !== 0) {
            this.props.history.push(`/home`);
        } else {
            console.log(response.message);
        }
    }

    render() {
        return (

            <div>
                <Navbar />
                <br />
                <div className="row justify-content-center align-items-center" >
                    <div className="col-md-6 login-form-1">
                        <form>
                            <h5>Perfil De Usuario</h5>
                            <hr /><br />
                            <div className="form-group">

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="nombreUsuario">Nombres:</label>
                                    </div>
                                    <input type="text" className="form-control" id="nombreUsuario" name="nombreUsuario" tabIndex="1"
                                        placeholder="Ingrese su Nombre" size="50" required
                                        value={this.state.nombreUsuario}
                                        onChange={e => this.handleChange('nombreUsuario', e.target.value)} />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="apellidoUsuario">Apellidos:</label>
                                    </div>
                                    <input type="text" className="form-control" id="apellidoUsuario" name="apellidoUsuario" tabIndex="2"
                                        placeholder="Ingrese su Apellido" size="50" required
                                        value={this.state.apellidoUsuario}
                                        onChange={e => this.handleChange('apellidoUsuario', e.target.value)} />
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="numeroDocumento">Numero Documento:</label>
                                </div>
                                <input type="text" className="form-control" id="numeroDocumento" name="numeroDocumento" tabIndex="3"
                                    placeholder="Ingrese Numero documento" size="50" required
                                    value={this.state.numeroDocumento}
                                    onChange={e => this.handleChange('numeroDocumento', e.target.value)} />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="generoUsuario">Genero:</label>
                                </div>
                                <select className="custom-select" id="generoUsuario" name="generoUsuario" tabIndex="4"  
                                    value={this.state.generoUsuario}
                                    onChange={e => this.handleChange('generoUsuario', e.target.value)}>
                                    <option value="DEFAULT" >Seleccione...</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                                </div>
                                <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" tabIndex="5"
                                    placeholder="dd-mm-yyyy" size="10" required
                                    value={this.state.fechaNacimiento}
                                    onChange={e => this.handleChange('fechaNacimiento', e.target.value)} />
                            </div>
                            <div><small>Formato Numero Telefonico: 123-456-6789</small></div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="numeroTel">Numero Telefonico:</label>
                                </div>
                                <input type="text" className="form-control" id="numeroTel" name="numeroTel" tabIndex="6"
                                    placeholder="012-321-6547" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" size="10" required
                                    value={this.state.numeroTel}
                                    onChange={e => this.handleChange('numeroTel', e.target.value)} />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="correoUsuario">Usuario/Email:</label>
                                </div>
                                <input type="email" className="form-control" id="correoUsuario" name="correoUsuario" tabIndex="7"
                                    placeholder="Ingrese el correo de usuario" required autoComplete="current-usser"
                                    value={this.state.correoUsuario}
                                    onChange={e => this.handleChange('correoUsuario', e.target.value)} />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="contrasenaUsuario">Contrasena:</label>
                                </div>
                                <input type="password" className="form-control" id="contrasenaUsuario" name="contrasenaUsuario" tabIndex="8"
                                    placeholder="Ingrese la Contraseña" required autoComplete="current-password"
                                    value={this.state.contrasenaUsuario}
                                    onChange={e => this.handleChange('contrasenaUsuario', e.target.value)} />
                            </div>
                            <br />
                            <div className="form-group">
                                <button onClick={this.add.bind(this)} className="btn btn-outline-dark btn-block" > Crear Usuario </button>
                            </div>
                        </form>
                        <hr />
                        <small> Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</small>
                        <p>¿Ya tienes una cuenta? <Link to="/login" className="badge badge-light Register">Iniciar Sesion</Link></p>                       
                    </div>
                </div >
                <br />
                <Footer />
            </div >
        );
    }
}

export default UsuariosForm;