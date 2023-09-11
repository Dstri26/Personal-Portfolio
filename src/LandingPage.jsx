import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Commons/Footer";
import Navbar from "./components/Commons/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";
import mainImage from "./images/trideepbarik.png";
import SocialBar from "./components/Commons/SocialBar";
import { FaEnvelope, FaMapMarkedAlt, FaMarker, FaPhone } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <SocialBar />
      <Parallax pages={4} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className="animation_layer parallax landing-text-container">
            <h1 className="display-3 landing-text">A DEVELOPER'S ODYSSEY</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain6"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="mountain5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <div className="row main-section d-flex justify-content-center align-items-center">
            <div className="col-md-4">
              <img src={mainImage} className="img-fluid" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <p className="display-3">Meet The Developer</p>
              <p
                className="h6"
                style={{ width: "80%", color: "var(--secondary-color)" }}
              >
                Hello, I'm{" "}
                <span style={{ color: "var(--primary-color)" }}>
                  Trideep Barik
                </span>
                , a tech enthusiast with a penchant for crafting digital
                wonders. With a journey spanning through the tech landscape,
                I've been dedicated to translating ideas into captivating tech
                solutions. Join me as we explore the dynamic world where code
                ignites innovation.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div
            className="skillset row d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-md-5">
              <p className="display-3">What's in the Tech Voyager's Toolkit?</p>
            </div>
            <div className="col-md-5">
              <p
                className="h6"
                style={{ width: "80%", color: "var(--secondary-color)" }}
              >
                In my digital toolkit, I wield a powerful set of skills tailored
                for the world of web development. Proficient in React and Redux,
                I specialize in crafting dynamic and responsive user interfaces.
                My expertise extends to front-end technologies, enabling me to
                design seamless and visually appealing digital experiences. With
                a keen eye for detail, I bring ideas to life by combining
                creativity with code. Let's explore the skills that power my
                journey.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          className="d-flex justify-content-center align-items-center"
        >
          <section
            className="contact d-flex justify-content-center align-items-center"
            id="contact"
          >
            <div className="container">
              <div
                className="main wow fadeInUp d-flex justify-content-center align-items-center"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-6 left">
                    <div
                      className="heading text-center"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInUp",
                      }}
                    >
                      <p className="display-6">
                        Let's Connect and Keep the Story Going.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="right">
                      <h4>Contact Information</h4>
                      <div className="info d-flex align-items-center">
                        <FaMapMarkedAlt />
                        <span>Bhubaneswar, India</span>
                      </div>
                      <div className="info d-flex align-items-center">
                        <FaPhone />
                        <span>+91 7377-077604</span>
                      </div>
                      <div className="info d-flex align-items-center">
                        <FaEnvelope />
                        <span>connect@trideepbarik.in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <p
                  className="small"
                  style={{
                    color: "var(--secondary-color)",
                    textAlign: "center",
                  }}
                >
                  © 2023{" "}
                  <span style={{ color: "var(--primary-color)" }}>
                    Trideep Barik
                  </span>{" "}
                  All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default LandingPage;
