import React,{Fragment,useState,useEffect} from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import "./scrpt.js";
import "./bok.css";
import BLogo from "../Assets/booksplash_logo.png";
import Booki from "./bcopies";
import Home from "../Home/home.jsx";
import { error } from "jquery";

// const TranslatePdf = require("translate-pdf");
axios.defaults.baseURL = 'https://booksplash.onrender.com';
// axios.defaults.baseURL = 'http://localhost:400';


const Bookse = ({match}) => {
    const {id} = useParams();
    const navigate = useNavigate(); 
    const [selectedLanguage, setSelectedLanguage] = useState("en"); //default language
    const copy = Booki.find((booki) => booki._id === id);
    let [errorm,setErrorm] =useState('');
    const [progress,setProgress] = useState();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const GoBack = () => {
        navigate(-1);
    }

    const GoToTop = () => {
        window.scrollTo({top:0,behaviour:'smooth'});
    }

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
      };
    
      

    //   const handleDownload = async () => {
    //     try {

    //       const downloadUrl = `/download/${selectedLanguage}/${copy._id}`;
    //       console.log(downloadUrl);
    //       const response = await axios.get(downloadUrl, { responseType: 'blob' });
    
    //       const blob = new Blob([response.data], { type: 'application/pdf' });

    //       const link = document.createElement('a');

    //       link.href = window.URL.createObjectURL(blob);
    //     //   link.download = `${copy.name}_${selectedLanguage}`;
    //  const Filedownloadname = `${copy.name} ${copy.author} in ${selectedLanguage}.pdf`.replace(/[\/\\:*?"<>|]/g, '').replace(/\s+/g, '_');
    //       link.download = Filedownloadname;
    
    //       document.body.appendChild(link);
    //       link.click();
    //       errorm = `${copy.name} was successfully downloaded ✅`;
    //       setErrorm(errorm);

    //       document.body.removeChild(link);
    //     } catch (error) {
    //       console.error('Error downloading PDF:', error);
    //       errorm = `So Sorry!!,😞${copy.name} is not available in selected language`;
    //       setErrorm(errorm);
    //     //   setErrorMessage(error);
    //     }

    //   };
    
    const handleDownload = async () => {
        try {
            const downloadUrl = `/download/${selectedLanguage}/${copy._id}`;
            console.log(downloadUrl);
            document.getElementById('prog').style.display='block';
            const simulateProgress = () => {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    setProgress(progress);
                    if(progress >= 100) {
                        clearInterval(interval);
                    }
                }, 300);
            };

            simulateProgress();


            const response = await axios.get(downloadUrl, {responseType: 'blob'});
            
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const link = document.createElement('a');
    
            const fileDownloadName = `${copy.name} in ${selectedLanguage}.pdf`.replace(/[\/\\:*?"<>|]/g, '').replace(/\s+/g, '_');
            link.download = fileDownloadName;
            link.href = window.URL.createObjectURL(blob);
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    
            setErrorm(`${copy.name} was successfully downloaded ✅`);
        } catch (error) {
            console.error('Error downloading PDF:', error);
            setProgress(0);
            document.getElementById('prog').style.display='none';
            setErrorm(`So Sorry!!,😞${copy.name} is not available in selected language`);
        }
    };
    
    

   

    return (
   
         
        <>
                
        

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        
       
        <body style={{height:"100%",lineHeight:"1.8",width:"100%"}}>

            {/* <!-- Navbar (sit on top) --> */}

            <div class="w3-top">
                <div class="w3-bar w3-white w3-card" id="myNavbar">
                    <Link to="/home" class="w3-bar-item w3-button w3-wide">
                    <img src={BLogo} style={{width:"35px",height:"35px"}} />
                    BOoKsPlaSh</Link>
                    {/* <!-- Right-sided navbar links --> */}
                    <div class="w3-right w3-hide-small">
                        {/* <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i></a>
                        <a href="#pricing" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> PLANS</a>
                        <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-gear"></i> SETTINGS</a> */}
                    </div>
                    {/* <!-- Hide right-floated links on small screens and replace them with a menu icon --> */}

                    {/* <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
                        <i class="fa fa-bars"></i>
                    </a> */}
                </div>
            </div>

            {/* <!-- Sidebar on small screens when clicking the menu icon --> */}
            {/* <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{ display: "none" }} id="mySidebar">
                <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
                <a href="#team" onclick="w3_close()" class="w3-bar-item w3-button">MY..</a>
                <a href="#work" onclick="w3_close()" class="w3-bar-item w3-button">SETTINGS</a>
                <a href="#pricing" onclick="w3_close()" class="w3-bar-item w3-button">PLANS</a>
            </nav> */}


            {/* <!-- Header with full-height image --> */}


            <br/><br/>
            <div>
            <button class="w3-button w3-black" onClick={GoBack} style={{marginLeft:"20px"}} >Back</button>
            </div>
            <br/>
            <div className="w3-row-padding">
                    {/* Column for additional image */}
                <div className="w3-col m6">
                <img style={{ marginLeft: "20px", float: "center", width: "300px", height: "400px" }} src={copy.img} fluid />
                </div>
                
                <div className="w3-col m6">
                    {/* additonal image if necessary */}
                </div>
                {/* Column for description */}
                <div className="w3-col m6" id="desc">
                    <p>Rating = {copy.rating}<br/>
                    <h4>Highlights</h4>
                    {copy.info}
                    </p>
                    {/* Add more description content here */}
                </div>
                {/* /Language selection options */}
                <div className="w3-col m6">
                    <label htmlFor="language">Select Language: </label>
                    <select id="language" name="language" onChange={handleLanguageChange} value={selectedLanguage}>
                    <option value="en">English</option>    
                    <option value="ar">Arabic</option>
                    <option value="chi">Chinese</option>
                    <option value="fr">French</option>
                    <option value="ger">German</option>
                    <option value="hi">Hindi</option>
                    <option value="mr">Marathi</option>
                    <option value="jp">Japanese</option>
                    <option value="ru">Russian</option>
                    <option value="esp">Spanish</option>

                    </select>
                    <p style={{color:"burlywood"}}>{errorm}</p>
                    <br/>
                    <div>
                        <button class="w3-button w3-grey" onClick={()=> {handleDownload(setProgress,setErrorm)}}>
                        Translate & Download
                        </button>
                        <div id="prog">
                        {progress > 0 && (
                            <div>
                           <progress value={progress} max="100">{progress}%</progress>
                           <p>Downloading: {progress}%</p>
                            </div>
                        )}
                        </div>
                    </div>
               </div>
           </div>
         
             <header class="bgiimg-1 w3-display-container w3-grayscale-min" id="home">
             <p id="title" style={{color: "rgb(61, 99, 132)"}}>{copy.name}</p>
             <p id="genre" style={{ color: "rgb(144, 173, 198)" }}>{copy.genre[0]} {copy.genre[1]} {copy.genre[2]}</p>
                <div class="w3-display-left w3-text-white" style={{ padding: "28px"}}>
                  
                  
                    <br/><br/>
                    <div>
                    {/* <button class="w3-button w3-grey" style={{marginLeft:"-20px"}}>
                        <a href={copy.pdf} target="_blank" style={{textDecoration:"none" }}>Download</a>
                    </button> */}
                    </div>
                </div>


                <div class="w3-display-bottomleft w3-text-grey w3-large" style={{ padding: "24px 48px" }}>
                    {/* < />!-- <i class="fa fa-linkedin w3-hover-opacity">Watch Now !</i> --> */}
                </div>
            </header>

            <br /><br /><br />


            {/* < />!-- About Section --> */}
            <div class="w3-container" style={{ padding: "128px 16px" }} id="about">
                <h3 class="w3-center">View it all</h3>
                <p class="w3-center w3-large">kEY BeSTs of booksplash</p>
                <div class="w3-row-padding w3-center" style={{ marginTop: "64px" }}>
                    <div class="w3-quarter">
                        <i class="fa fa-language w3-margin-bottom w3-jumbo w3-center"></i>
                        <p class="w3-large">Geographic</p>
                        <p>download in any language of your choice and enjoy.</p>
                    </div>
                    <div class="w3-quarter">
                        <i class="fa fa-globe w3-margin-bottom w3-jumbo"></i>
                        <p class="w3-large">Diversity</p>
                        <p>Books of all genre from various corners of world,vintage,authentic and above all no censors.</p>
                    </div>
                    <div class="w3-quarter">
                        <i class="fa fa-child w3-margin-bottom w3-jumbo"></i>
                        <p class="w3-large">Easszzee</p>
                        <p>Easy and Balance interface with minimal constraints.Read it online in pdf or download for offline read.</p>
                    </div>
                    <div class="w3-quarter">
                        <i class="fa fa-asl-interpreting w3-margin-bottom w3-jumbo"></i>
                        <p class="w3-large">Support</p>
                        <p>Any kind of questions,thoughts,plans do'not hesitate to reach us. We are waiting..</p>
                    </div>
                </div>
            </div>

            {/* < />!-- Promo Section - "We know design" --> */}
            <div class="w3-container w3-light-grey" style={{ padding: "128px 16px" }} id="legal">
                <div class="w3-row-padding">
                    <div class="w3-col m6">
                        <h3>We know the LAW.</h3>
                        <p>All books are copyright free published before 1970<br/>
                        Select books which are protected by copyright are all legally distributed on booksplash<br/>
                        Read the notice on each copy of book before using commercially or sharing publicly</p>
                    </div>
                    <div class="w3-col m6">
                    </div>
                </div>
            </div>


            {/* < />!-- Promo Section "Statistics" --> */}
            <div class="w3-container w3-row w3-center w3-dark-grey w3-padding-64" id="stats">
                <div class="w3-quarter">
                    <span class="w3-xxlarge">1</span>
                    <br />Partner-Project Gutenberg
                </div>
                <div class="w3-quarter">
                    <span class="w3-xxlarge">100+</span>
                    <br/>Books and upcoming
                </div>
                {/* <div class="w3-quarter">
                    <span class="w3-xxlarge"></span>
                    <br/>Daily Readers
                </div> */}
                {/* <div class="w3-quarter">
                    <span class="w3-xxlarge"></span>
                    <br/>End User's Book Materials
                </div> */}
            </div>



            {/* < />!-- Contact Section --> */}
            <div class="w3-container w3-light-grey" style={{ padding: "128px 16px" }} id="contact">
                <h3 class="w3-center">Suggestions & Grievances</h3>
                <p class="w3-center w3-large">Something wrong with this copy or something itches you <br/>
                let's get in touch virtually </p>
                <div style={{ marginTop: "48px" }}>
                    <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>ElseWhere</p>
                    {/* <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p> */}
                    <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: booksplash@gmail.com</p>
                    <br />
                    <form action="https://formsubmit.co/f1c4efcbc2dc0326a61c8eda5674d758" method="POST" target="_blank">
                        <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" /></p>
                        <p><input class="w3-input w3-border" type="email" placeholder="Email" required name="Email" /></p>
                        <p><input class="w3-input w3-border" type="text" placeholder="Message" required name="Message" /></p>
                        <p>
                            <button class="w3-button w3-black" type="submit">
                                <i class="fa fa-paper-plane"></i> SHOOT IT !
                            </button>
                        </p>
                    </form>
                    {/* < />!-- Image of location/map --> */}
                </div>
            </div>
                    
            {/* < />!-- Footer --> */}
            <footer class="w3-center w3-black w3-padding-64">
                <button onClick={GoToTop} class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</button>
                <div class="w3-xlarge w3-section">
                    <i class="fa fa-twitter w3-hover-opacity"></i>
                    <i class="fa fa-linkedin w3-hover-opacity"></i>
                </div> 
                <div clas="w3-xsmall w3-section">        
                <p style={{fontSize:"10px",marginBottom:"-10px"}}>copyright©
                booksplash.com</p>
                <p style={{fontSize:"10px"}}>All rights reserved</p>      
                </div> 
            </footer>

            </body>

        </>
                    
                 );

                 }
                    
                    
export default Bookse;                    
