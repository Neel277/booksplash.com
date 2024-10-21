import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./about.css";
import open from "../Assets/open_book.jpg";
import knowl from "../Assets/atlas_book.jpg";
import BLogo from "../Assets/booksplash_logo.png";
import "./abs.js";

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const GoTop = () => {
        window.scrollTo({ top: 0, behaviour: 'smooth' });
    };

    const About = () => {
        window.scrollTo({ top: 390, behavior: 'smooth' });
    };

    const Portf = () => {
        window.scrollTo({ top: 1070, behavior: 'smooth' });
    };

    const Conta = () => {
        window.scrollTo({ top: 2030, behavior: 'smooth' });
    };

    const [navbarClass, setNavbarClass] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setNavbarClass('w3-card w3-animate-top w3-white');
            } else {
                setNavbarClass('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function toggleFunction() {
      setIsMenuOpen(!isMenuOpen); // Toggle the menu state
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") === -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };


    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="PageAstra - A global platform to discover and read free books, comics, and literature from various genres and languages." />
            <meta name="keywords" content="free books, knowledge reading, Project Gutenberg, free literature, comics, multilingual books, eBooks, online platform" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <script src="./abs.js" />
            <body>
                {/* Navbar (sit on top) */}
                <div className="w3-top">
                    <div className={`w3-bar ${navbarClass}`} id="myNavbar">
                        <a  className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right" 
                                    style={{
                                        backgroundColor: isMenuOpen ? '#ddd' : 'transparent',
                                        padding: '24px 18px 18px 22px',
                                        marginTop:"4px",
                                        borderRadius: '4px',
                                        transition: 'background-color 0.3s' }}
                         
                         onClick={toggleFunction} >
                        <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> {/* Toggle between 'bars' and 'times' */}
                        </a>

                        <Link to="/home" className="w3-bar-item w3-button"> 
                            <img src={BLogo} id="ablogo" style={{ height: "40px", width: "40px", marginTop:"3px",
                                                                
                             }} alt="Logo" />
                        </Link>
                        <a onClick={About} className="w3-bar-item w3-button w3-hide-small" style={{ marginTop:"18px"}}><i className="fa fa-user"></i> ABOUT</a>
                        <a onClick={Portf} className="w3-bar-item w3-button w3-hide-small" style={{marginTop:"18px"}} ><i className="fa fa-th"></i> PORTFOLIO</a>
                        <a onClick={Conta} className="w3-bar-item w3-button w3-hide-small" style={{marginTop:"18px"}}><i className="fa fa-envelope"></i> CONTACT</a>
                    </div>

                    {/* Navbar on small screens */}
                    <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium"
                  style={{ position: 'absolute', top: '100%', right: '0', width: '100%', zIndex: '1000' }}  >
                        <Link onClick={About} className="w3-bar-item w3-button" >ABOUT</Link>
                        <a onClick={Portf} className="w3-bar-item w3-button" >PORTFOLIO</a>
                        <a onClick={Conta} className="w3-bar-item w3-button" >CONTACT</a>
                    </div>
                </div>

                {/* First Parallax Image with Logo Text */}
                <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                    <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
                        {/* <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
                            {/* <span className="w3-hide-small">BOoKsPlaSh</span> */}
                        {/* </span>  */}
                    </div>
                </div>

                {/* About Section */}
                <section id="aboust">
                <div className="w3-content w3-container w3-padding-64" id="about">
                    <h3 className="w3-center">ABOUT PAGEASTRA.COM</h3>
                    <p className="w3-center"><em>read more & expand your knowledge and range</em></p>
                    <p>
                    PageAstra is a global online platform designed to help readers explore a vast library of free books, comics, and literature across multiple languages. 
                    We began as a small project to promote education and quickly evolved into a hub for readers from all walks of life. 
                    Our mission is to break barriers by offering unrestricted access to classic literature, modern books, and comics. 
                    Whether you're a fan of timeless novels, indie comics, or educational materials, PageAstra provides a seamless and enriching reading experience. 
                    Powered by <strong>Project Gutenberg</strong> and constantly growing, our collection is designed for anyone looking to expand their knowledge,
                    improve their language skills, or simply enjoy a good read.
                    </p>

                    <div className="w3-row">
                        <div className="w3-col m6 w3-center w3-padding-large">
                            <p><b>Project Gutenberg</b></p><br />
                            <img src={open} className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Open Book" width="500" height="333" />
                        </div>
                        <div className="w3-col m6 w3-hide-small w3-padding-large">
                            <p>
                                We load all and only public domain books for commercial distribution.
                                pageastra provides literature in a comfy interface in multiple languages(coming soon), with more being added.
                            </p>
                        </div>
                    </div>
                </div>

                </section>

                {/* Portfolio Section */}
                <section id="portolf">
                <div className="w3-content w3-container w3-padding-64" id="portfolio">
                    <h3 className="w3-center">CARL T. ROGAN</h3>
                    <p className="w3-center">
                        <em>The library is the temple of learning and<br />
                            learning has liberated more people than all the wars in history</em>
                    </p><br />
                    <div className="w3-row-padding w3-center">
                        {/* Images */}
                        <div className="w3-col m3">
                            <img src="https://hd.wallpaperswide.com/thumbs/books_3-t2.jpg" style={{ width: "100%" }} onClick={toggleFunction} className="w3-hover-opacity" alt="The mist over the mountains" />
                        </div>
                        <div className="w3-col m3">
                            <img src="https://hd.wallpaperswide.com/thumbs/lello_bookshop_in_porto_portugal-t2.jpg" style={{ width: "100%" }} onClick={toggleFunction} className="w3-hover-opacity" alt="Coffee beans" />
                        </div>
                        <div className="w3-col m3">
                            <img src="https://hd.wallpaperswide.com/thumbs/let_it_burn-t2.jpg" style={{ width: "100%" }} onClick={toggleFunction} className="w3-hover-opacity" alt="Bear closeup" />
                        </div>
                        <div className="w3-col m3">
                            <img src="https://hd.wallpaperswide.com/thumbs/bookshelves-t2.jpg" style={{ width: "100%" }} onClick={toggleFunction} className="w3-hover-opacity" alt="Quiet ocean" />
                        </div>
                    </div>
                </div>

                </section>

                {/* Contact Section */}

                <section id="contax">
                <div className="w3-content w3-container w3-padding-64" id="contact">
                    <h3 className="w3-center">WHERE WE ARE ESTABLISHED</h3>
                    <p className="w3-center"><em>We'd love your feedback or any requests!</em></p>
                    <div className="w3-row w3-padding-32 w3-section">
                        <div className="w3-col m8 w3-panel">
                            <div className="w3-large w3-margin-bottom">
                                <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Anywhere<br />
                                <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +91 000xxxxx<br />
                                <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: pageastra@gmail.com<br />
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                {/* Footer */}
                <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
                    <button className="w3-button w3-light-grey" onClick={GoTop}><i className="fa fa-arrow-up w3-margin-right"></i>To the top</button>
                    <div className="w3-xlarge w3-section">
                        <i className="fa fa-facebook-official w3-hover-opacity"></i>
                        <i className="fa fa-instagram w3-hover-opacity"></i>
                        <i className="fa fa-snapchat w3-hover-opacity"></i>
                        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                        <i className="fa fa-twitter w3-hover-opacity"></i>
                        <i className="fa fa-linkedin w3-hover-opacity"></i>
                    </div>

                    <div clas="w3-xsmall w3-section">        
                    <p style={{fontSize:"10px",marginBottom:"-10px",marginTop:"20px"}}>copyright©
                        pageastra.com</p>
                    <p style={{fontSize:"10px"}}>All rights reserved</p>      
                    </div> 
                </footer>
            </body>
        </>
    );
}

