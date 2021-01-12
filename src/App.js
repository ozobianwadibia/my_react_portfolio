import React, { Component } from "react";
import "./css/normalize.css";
import "./css/portfolio.css";
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import SocialMedia from "./components/SocialMedia";
import ScrollButton from "./components/ScrollButton";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <DarkModeToggle />
        <Introduction />
        <Projects />
        <ContactMe />
        <SocialMedia />
        <ScrollButton />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
