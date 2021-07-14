
import React, { Component } from "react";
import '../App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Navbar from './Navbar';

class Home extends Component {
  componentWillMount() {
    if (localStorage.getItem("loggedUser")) {
      this.props.history.replace("/studentdash");
    }
    if (localStorage.getItem("loggedAdmin")) {
      this.props.history.replace("/hmdash");
    }
    if (localStorage.getItem("loggedTeacher")) {
      this.props.history.replace("/teacherdash");
    }

  }
  componentDidMount() {
    document.title = "Educare Home";
  }
  render() {
    return (
      <>
      <Navbar/>
      <HeroSection />
      <Cards />
      <Footer />
    </>
    );
  }
}



export default Home;
