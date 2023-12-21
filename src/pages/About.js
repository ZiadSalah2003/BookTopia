import React from 'react';
import ziad from "../assets/ziad.jpeg";
import hazem from "../assets/Hazem.jpg";
import ahmed from "../assets/Ahmed.jpeg";
import yousef from "../assets/Yousef.jpeg";
import sherif from "../assets/Sherif.jpeg"
import anon from "../assets/anon.jpg"
import "./About.css"
import Ziad from "../assets/wallhaven-rrqowm.jpg";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css"></link>
function About() {
    return (<>
      <div className="Welcome-to mb-4">
                <h1 style={{textAlign: "center"}}><strong><span style={{color: "#FFFFFF"}}>Welcome to 
                 </span>
                 <span
                    style={{color: "#FFFFFF"}}> Book</span><span style={{color: "#F9391A"}}>Topia</span></strong></h1>
                </div>
            <div className="text-light wel m-4 mx-5 text ">
                <p className="pragraph-container">
                    <strong><span
                        style={{color: "#49525B"}}>Book</span><span style={{color: "#F9391A"}}>Topia</span></strong> is
                    a dedicated platform for book enthusiasts, providing
                    a seamless and enjoyable experience for readers of all levels.
                    The site offers features such as a reading tracker to monitor progress,
                    personalized book recommendations, and the ability to create and organize a
                    virtual bookshelf. Whether you prefer fiction, non-fiction, mystery, or romance,
                    Booktopia invites readers to join a literary adventure, connecting with fellow
                    book enthusiasts and making it a home for all literary pursuits.
                </p>
                <img src={Ziad} alt="Ziad" className="pragraph-image" />
            </div>
            <div>
                <h1 className="text-light Team-Members"><span
                    style={{color: "#F9391A"}}>Team Members</span></h1>
            </div>
            <div className="about-container d-flex flex-wrap justify-content-center">
                <div className="crd" style={{width: "12rem", backdropFilter: 'blur(50px)'}}>
                    <div className="card-img-container">
                        <img src={ziad} className="card-img-top rounded-top" alt={"Ziad"}/>
                    </div>
                    <div className="card-body text-light mt-3">
                        <div className="mb-1">
                            <h5 className="card-title">Ziad Salah</h5>
                            <div className="social-links">
  <a href="https://github.com/username" className="github-link">
    <i className="bi bi-github"></i>
  </a>
  <a href="https://linkedin.com/in/username" className="linkedin-link">
    <i className="bi bi-linkedin"></i>
  </a>
</div>
                        </div>
                        <p className="card-titlee">Frontend Developer Leader</p>
                    </div>
                </div>
                <div className="crd" style={{width: "12rem", backdropFilter: 'blur(50px)'}}>
                    <div className="card-img-container">
                        <img src={hazem} className="card-img-top rounded-top" alt={"Hazem"}/>
                    </div>
                    <div className="card-body text-light mt-3">
                        <div className="mb-1">
                            <h5 className="card-title">Hazem Helal</h5>
                            <div className="social-links">
  <a href="https://github.com/username" className="github-link">
    <i className="bi bi-github"></i>
  </a>
  <a href="https://linkedin.com/in/username" className="linkedin-link">
    <i className="bi bi-linkedin"></i>
  </a>
</div>
                        </div>
                        <p className="card-titlee">Frontend Developer</p>
                    </div>
                </div>
                <div className="crd" style={{width: "12rem", backdropFilter: 'blur(50px)'}}>
                    <div className="card-img-container">
                        <img src={ahmed} className="card-img-top rounded-top" alt={"Ahmed"}/>
                    </div>
                    <div className="card-body text-light mt-3">
                        <div className="mb-1">
                            <h5 className="card-title">Ahmed Mohamed</h5>
                            <div className="social-links">
  <a href="https://github.com/username" className="github-link">
    <i className="bi bi-github"></i>
  </a>
  <a href="https://linkedin.com/in/username" className="linkedin-link">
    <i className="bi bi-linkedin"></i>
  </a>
</div>
                        </div>
                        <p className="card-titlee">UI/UX Designer</p>
                    </div>
                </div>
                <div className="crd" style={{width: "12rem", backdropFilter: 'blur(50px)'}}>
                    <div className="card-img-container">
                        <img src={yousef} className="card-img-top rounded-top" alt={"Youssef"}/>
                    </div>
                    <div className="card-body text-light mt-3">
                        <div className="mb-1">
                            <h5 className="card-title">Youssef Medhat</h5>
                            <div className="social-links">
  <a href="https://github.com/username" className="github-link">
    <i className="bi bi-github"></i>
  </a>
  <a href="https://linkedin.com/in/username" className="linkedin-link">
    <i className="bi bi-linkedin"></i>
  </a>
</div>
                        </div>
                        <p className="card-titlee">Backend Developer</p>
                    </div>
                </div>
                <div className="crd" style={{width: "12rem", backdropFilter: 'blur(50px)'}}>
                    <div className="card-img-container">
                        <img src={sherif} className="card-img-top rounded-top" alt={"sherif"}/>
                    </div>
                    <div className="card-body text-light mt-3">
                        <div className="mb-1">
                            <h5 className="card-title">Sherif Khairy</h5>
                            <div className="social-links">
  <a href="https://github.com/username" className="github-link">
    <i className="bi bi-github"></i>
  </a>
  <a href="https://linkedin.com/in/username" className="linkedin-link">
    <i className="bi bi-linkedin"></i>
  </a>
</div>
                        </div>
                        <p className="card-titlee">Backend Developer</p>
                    </div>
                </div>
                <div className="crd" style={{width: "12rem", backdropFilter: 'blur(50px)'}}>
                    <div className="card-img-container">
                        <img src={anon} className="card-img-top rounded-top" alt={"shahd"}/>
                    </div>
                    <div className="card-body text-light mt-3">
                        <div className="mb-1">
                            <h5 className="card-title">Shahd Osman</h5>
                            <div className="social-links">
  <a href="https://github.com/username" className="github-link">
    <i className="bi bi-github"></i>
  </a>
  <a href="https://linkedin.com/in/username" className="linkedin-link">
    <i className="bi bi-linkedin"></i>
  </a>
</div>
                        </div>
                        <p className="card-titlee">Backend Developer</p>
                    </div>
                </div>
            </div>
        </>);
}

export default About;
