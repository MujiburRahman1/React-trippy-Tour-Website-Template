// import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactImg from "../assets/2.jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        // heroImg="https://res.cloudinary.com/dkzxszerc/image/upload/v1754033635/12_e0dsnn.jpg"
        title="Contact"
        btnClass="hide"
      />
      {/* <Destination /> */}
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
