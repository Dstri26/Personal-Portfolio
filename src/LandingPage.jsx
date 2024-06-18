import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/MeetTheDeveloper";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Commons/Footer";
import Navbar from "./components/Commons/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import SocialBar from "./components/Commons/SocialBar";
import MeetTheDeveloper from "./components/AboutMe/MeetTheDeveloper";

function LandingPage() {
  return (
    <>
      <SocialBar />
      <Parallax pages={4} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="animation_layer parallax landing-text-container">
            <h1 className="display-2 landing-text">A DEVELOPER'S ODYSSEY</h1>
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
          <MeetTheDeveloper />
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
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default LandingPage;
