// import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import AboutImg from "../assets/night.jpg";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        // heroImg="https://res.cloudinary.com/dkzxszerc/image/upload/v1754033635/12_e0dsnn.jpg"
        title="About"
        btnClass="hide"
      />
      {/* <Destination /> */}
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
