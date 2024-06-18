import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
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
            <span style={{ color: "var(--primary-color)" }}>Trideep Barik</span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
