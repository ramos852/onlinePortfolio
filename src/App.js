import React, { Component } from "react";
import resumeData from "./components/resumeData";
import Header from "./components/header/header";
import About from "./components/about/about";
import Resume from "./components/resume/Header";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import ContactUs from "./components/contactus/contactus";
import Footer from "./components/footer/footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;
