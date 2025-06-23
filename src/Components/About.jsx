import React, { useState } from "react";
import { TiShoppingBag } from "react-icons/ti";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Modal, Button } from "react-bootstrap";
import CertificateOfDeployment from "../assets/images/certificates/certificate-of-deployment.png";
import EthicalHacking from "../assets/images/certificates/ethical-hacking.jpg";
import FundamentalsOfPython from "../assets/images/certificates/fundamentals-of-python.jpg";
import PosterCertificate from "../assets/images/certificates/poster-certificate.jpg";
import ProficientInAdvancePhp from "../assets/images/certificates/proficient-in-advance-php.png";
import ProficientInWebFundamentals from "../assets/images/certificates/proficient-in-web-fundamentals.png";
import ReactCertificate from "../assets/images/certificates/react-certificate.png";
import SoftwareProgramming from "../assets/images/certificates/software-programming-101.jpg";
import "../assets/css/about.css";

const certificates = [
  {
    title: "Web Development with REACT",
    description: "GROUND GURUS - April 26-27, 2025",
    img: ReactCertificate,
  },
  {
    title: "Capstone Project Deployment",
    description: "PTCAO - December 18, 2023",
    img: CertificateOfDeployment,
  },
  {
    title: "Ethical Hacking & Pen Testing",
    description: "MSTCONNECT - April 19-20, 2025",
    img: EthicalHacking,
  },
  {
    title: "Software Programming 101",
    description: "MSTCONNECT - April 12, 2025",
    img: SoftwareProgramming,
  },
  {
    title: "Fundamentals of Python Programming",
    description: "Data Analytics Philippines - April 5, 2025",
    img: FundamentalsOfPython,
  },
  {
    title: "Best Poster Presentor",
    description: "UCU  faculty research collocume - November 28, 2024",
    img: PosterCertificate,
  },
  {
    title: "Proficient in Web Fundamentals",
    description: "Village 88 Inc. - March 2024",
    img: ProficientInWebFundamentals,
  },
  {
    title: "Proficient in Advanced PHP",
    description: "Village 88 Inc. - February 2024",
    img: ProficientInAdvancePhp,
  },
];

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleShow = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section id="about">
      <div className="row text-center">
        <h1>About</h1>
      </div>
      <p className="mb-3">
        I'm a full-stack web and mobile developer with hands-on experience in
        building responsive websites and mobile applications using JavaScript,
        PHP, and Python. I work with frameworks like Laravel and CodeIgniter,
        and technologies such as MySQL, jQuery, Ajax, and Bootstrap. My projects
        include e-commerce platforms and custom information systems tailored to
        client needs.
      </p>
      <p>
        As a part-time IT instructor, I teach programming fundamentals and
        mentor students in applying what they learn through real-world projects.
        My background in freelance work and intensive development training has
        equipped me with practical skills in full-stack development, system
        design, and secure application deployment.
      </p>

      <div className="row experience-certificate-section">
        <div className="col experience-card">
          <h2>
            <TiShoppingBag id="ic-experience" />
            Experience
          </h2>
          <div className="mb-3">
            <h3>Information Technology Instructor</h3>
            <div className="row">
              <div className="col company">Urdaneta City University</div>
              <div className="col text-end">
                <span>2024</span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h3>Full-stack Web Development</h3>
            <div className="row">
              <div className="col company">Village 88 Inc. Trainee</div>
              <div className="col text-end">
                <span>2024</span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h3>BS Information Technology</h3>
            <div className="row">
              <div className="col company">Urdaneta City University</div>
              <div className="col text-end">
                <span>2024</span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h3>HelloWorld</h3>
            <div className="row">
              <div className="col company">My first line of code</div>
              <div className="col text-end">
                <span>2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 certificate-card">
          <h2>
            <LiaCertificateSolid id="ic-certificate" />
            Certifications
          </h2>
          <div className="mb-3">
            <div className="row certificate-inner-card">
              {certificates.map((cert, index) => (
                <div className="col-md-6 mb-3" key={index}>
                  <div className="row">
                    <div className="col-1">
                      <BsArrowUpRightSquare
                        className="ic-view-certificate"
                        onClick={() => handleShow(cert)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="col-11">
                      <h3>{cert.title}</h3>
                      <p className="detail">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} centered size="xl" dialogClassName="certificate-modal modal-top-center">
        <Modal.Header closeButton className="certificate-modal-heading">
          <Modal.Title>{selectedCert?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="certificate-modal-body">
          <p>{selectedCert?.description}</p>
          <img
            src={selectedCert?.img}
            alt="certificate"
            className="modal-img img-fluid"
          />
        </Modal.Body>
        <Modal.Footer className="certificate-modal-footer">
          <Button className="btn btn-outline-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default About;
