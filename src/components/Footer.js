import React from "react";
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <footer className="bg-dark text-center text-white">
        <div className="container p-2 pb-0">
            <section >
                <form>
                    <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <p className="pt-1">
                                <strong>Suscribete a nuestra pagina y recibe todas las promociones</strong>
                            </p>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="form-outline form-white mb-4">
                                <input type="email" id="form5Example29" className="form-control" />
                                <label className="form-label" htmlFor="form5Example29">Email-Correo</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-outline-light mb-4">
                                Subscribirse
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        <hr color="grey"/>
        <div className="text-center p-2">
            © 2021 Copyright:
            <Link className="text-white" to="https://Cafe.com/">BogotaCoffeShop.com</Link>
        </div>
    </footer>
    );
}

export default Footer