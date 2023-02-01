import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Cards from '../../components/cards/'
import Footer from "../../components/footer";
import Body from "../../components/body-home";

function Home(){

    return (
        <>
            <Header />
            <Body />
            <Cards />    
            <Footer />
        </>
       
    )
}


export default Home;