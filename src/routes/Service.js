// import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import ServiceImg from "../assets/10.jpg";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        // heroImg="https://res.cloudinary.com/dkzxszerc/image/upload/v1754033635/12_e0dsnn.jpg"
        title="Service"
        btnClass="hide"
      />
      {/* <Destination /> */}
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
