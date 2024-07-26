import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
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
        window.scrollTo({top:0,behaviour:'smooth'});
    }

    const About = () => {
        window.scrollTo({top:390,behavior:'smooth'});
    }

    const Portf = () => {
        window.scrollTo({top:1070,behavior:'smooth'});
    }

    const Conta = () => {
        window.scrollTo({top:2030,behavior:'smooth'});
    }
    
    const [navbarClass, setNavbarClass] = useState('');

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
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    


    return(
        <>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="./abs.js" />
        <body>

        {/* <!-- Navbar (sit on top) --> */}
        <div class="w3-top">
        <div class="w3-bar" id="myNavbar" className={navbarClass}>
            <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onClick={toggleFunction} title="Toggle Navigation Menu">
            <i class="fa fa-bars"></i>
            </a>
            <Link to="/home" class="w3-bar-item w3-button">
            <img src={BLogo} style={{height:"40px",width:"40px"}} />
            </Link>
            <a onClick={About} class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
            <a onClick={Portf} class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTFOLIO</a>
            <a onClick={Conta} class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
        </div>

        {/* <!-- Navbar on small screens --> */}
        <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
            <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
            <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
            <a href="#" class="w3-bar-item w3-button">SEARCH</a>
        </div>
        </div>

        {/* <!-- First Parallax Image with Logo Text --> */}
        <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
        <div class="w3-display-middle" style={{whiteSpace:"nowrap"}}>
            <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity"><span class="w3-hide-small">BOoKsPlaSh</span></span>
        </div>
        </div>

        {/* <!-- Container (About Section) --> */}
        <div class="w3-content w3-container w3-padding-64" id="about">
        <h3 class="w3-center">ABOUT BOOKSPLASH.COM</h3>
        <p class="w3-center"><em>read more & expand your reach</em></p>
        <p>What this website with earlier aim of deploying a web application for curricular and impression building gradually developed 
            an enthusiasm for spreading knowledge, education through digital means on a global platform connecting people from different linguistic
            regions without any differentiation and restrictions on books,literature,etc.
        </p>
        <div class="w3-row">
            <div class="w3-col m6 w3-center w3-padding-large">
            <p><b>Project Gutenberg</b></p><br/>
            <img src={open} class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333"/>
            </div>

            {/* <!-- Hide this text on small devices --> */}
            <div class="w3-col m6 w3-hide-small w3-padding-large">
            <p>We load all the copyright free books which are free for commercial distribution directly from Project Gutenberg.Booksplash is a modern platform which provides you literature in enhanced and comfy
                Interface in as many languages as you would demand, with more and more books in more languages being added.
            </p>
            </div>
        </div>
        
        </div>


        {/* <!-- Second Parallax Image with Portfolio Text --> */}
        {/* <div class="bgimg-2 w3-display-container w3-opacity-min">
        <div class="w3-display-middle">
            <span class="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
        </div>
        </div> */}

        {/* <!-- Container (Portfolio Section) --> */}
        <div class="w3-content w3-container w3-padding-64" id="portfolio">
        <h3 class="w3-center">CARL T. ROGAN</h3>
        <p class="w3-center">
            <em>The library is the temple of learning and <br/> 
            learning has liberated more people than all the wars in history</em></p>
        <br/>

        {/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
        <div class="w3-row-padding w3-center">
            <div class="w3-col m3">
            <img src="https://hd.wallpaperswide.com/thumbs/books_3-t2.jpg" style={{width:"100%"}} onclick="onClick()" class="w3-hover-opacity" alt="The mist over the mountains"/>
            </div>

            <div class="w3-col m3">
            <img src="https://hd.wallpaperswide.com/thumbs/lello_bookshop_in_porto_portugal-t2.jpg" style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="Coffee beans"/>
            </div>

            <div class="w3-col m3">
            <img src="https://hd.wallpaperswide.com/thumbs/let_it_burn-t2.jpg" style={{width:"100%"}} onclick="toggleFunction()" class="w3-hover-opacity" alt="Bear closeup"/>
            </div>

            <div class="w3-col m3">
            <img src="https://hd.wallpaperswide.com/thumbs/bookshelves-t2.jpg" style={{width:"100%"}} onclick="toggleFunction()" class="w3-hover-opacity" alt="Quiet ocean"/>
            </div>
        </div>

        <div class="w3-row-padding w3-center w3-section">
            <div class="w3-col m3">
            <img src="https://hd.wallpaperswide.com/thumbs/old_books_outdoors-t2.jpg" style={{width:"100%"}} onclick="toggleFunction()" class="w3-hover-opacity" alt="The mist"/>
            </div>

            <div class="w3-col m3">
            <img src="https://hd.wallpaperswide.com/thumbs/books_life-t2.jpg" style={{width:"100%"}} onclick="toggleFunction()" class="w3-hover-opacity" alt="My beloved typewriter"/>
            </div>

            <div class="w3-col m3">
            <img src="https://hd.wallpaperswide.com/thumbs/pink_peony_flower_books_coffee_mug_wooden_table-t2.jpg" style={{width:"100%"}} onclick="toggleFunction()" class="w3-hover-opacity" alt="Empty ghost train"/>
            </div>

            <div class="w3-col m3">
            <img src="https://hd.wallpaperswide.com/thumbs/girl_with_books-t2.jpg" style={{width:"100%"}} onclick="toggleFunction()" class="w3-hover-opacity" alt="Sailing"/>
            </div>
        </div>
        </div>

        {/* <!-- Modal for full size images on click--> */}
        <div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
        <span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>
        <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img id="img01" class="w3-image"/>
            <p id="caption" class="w3-opacity w3-large"></p>
        </div>
        </div>

        {/* <!-- Third Parallax Image with Portfolio Text --> */}
        <div class="bgimg-3 w3-display-container w3-opacity-min">
        <div class="w3-display-middle">
            <span class="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
        </div>
        </div>

        {/* <!-- Container (Contact Section) --> */}
        <div class="w3-content w3-container w3-padding-64" id="contact">
        <h3 class="w3-center">WHERE WE ARE ESTABLISHED</h3>
        <p class="w3-center"><em>We'd love your feedback or any request or conerns!</em></p>

        <div class="w3-row w3-padding-32 w3-section">

            <div class="w3-col m8 w3-panel">
            <div class="w3-large w3-margin-bottom">
                <i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>Anywhere<br/>
                <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +91 000xxxxx<br/>
                <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: booksplash@gmail.com<br/>
            </div>
            
        
            </div>
        </div>
        </div>

        {/* <!-- Footer --> */}
        <footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <button class="w3-button w3-light-grey" onClick={GoTop}><i class="fa fa-arrow-up w3-margin-right"></i>To the top</button>
        <div class="w3-xlarge w3-section">
            <i class="fa fa-twitter w3-hover-opacity"></i>
            <i class="fa fa-linkedin w3-hover-opacity"></i>
            <div clas="w3-xsmall w3-section">        
                <p style={{fontSize:"10px",marginBottom:"-10px",marginTop:"20px"}}>copyright©
                booksplash.com</p>
                <p style={{fontSize:"10px"}}>All rights reserved</p>      
            </div> 
        </div>

        </footer>
        
       
        </body>

        </>
    );
}
