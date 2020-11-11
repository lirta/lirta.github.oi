import React, { Component } from 'react'
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";

export default class LandingPage extends Component {
   render() {
        return (
        <body className="container-fluid">
          <Header {...this.props}></Header>
          <Hero data={landingPage.hero}></Hero>  
        </body>
    );
}
}
