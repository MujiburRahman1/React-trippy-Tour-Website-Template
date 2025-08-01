// src/routes/SignUp.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SignUpImg from "../assets/10.jpg";
import SignUpForm from "../components/SignUpForm";

// import ContactForm from "../components/ContactForm"; // You can reuse or adapt this for a signup form

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={SignUpImg}
        title="Join Us Today!"
        text="Create your account and start your journey."
        btnClass="hide" // Hide the button on the hero section for signup
      />
      {/* You can rename ContactForm to SignUpForm and modify its content
          or create an entirely new component for the signup form fields */}
      <SignUpForm />
      <Footer />
    </>
  );
}

export default SignUp;
