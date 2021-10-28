import React from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";


class Home extends React.Component {

    render() {
        return (
           <div>
               <Navbar/>
               <Footer/>           
           </div>
           
        );
    }
}

export default Home;