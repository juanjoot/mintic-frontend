import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import UsuariosForm from './pages/UsuariosForm';
import RecuperaLogin from './pages/RecuperaLogin';

// crear componentes tipo class o tipo function -- para tipo class se debe utilizar un metodo render-constructor y estados
// Instalar extensiones ES7 React/Redux/GraphQL/React-Native snippets y React Native Tools
// las etiquetas de html se utilizan para html y las etiquetas en mayuscula para jsx para componentes

class App extends React.Component {
  // metodo render permite utilizar java y html, contuir interfaz grafica utiliza jsx(cambian Atributos class x className)
  render() {
    return (
      <Router>
        <Switch>
          <Route path = "/login" exact component = {Login}></Route>
          <Route path = "/" exact component = {Home}></Route> 
          <Route path = "/UsuariosForm" exact component = {UsuariosForm}></Route>
          <Route path = "/RecuperaLogin" exact component = {RecuperaLogin}></Route>       
        </Switch>
      </Router>
    );
  }
}
// el export permite utilizar el componente en otros componentes
export default App;
