import React, { useState , useEffect } from "react";
import "./home.css";
import Vid from "../Assets/Spid.mp4";
import BLogo from "../Assets/booksplash_logo.png";
import Card from "../Rows";
import axios from "axios";
import Pagination from "../Pagination";
import Genre from "../Genre";
import Search from "../Search";
import Sort from "../Sort";
import { Link } from "react-router-dom";
// const base_url = "http://localhost:4000/studs/books"; 
const base_url = "https://booksplash.onrender.com/api/books";

export default function Home() {
   
// Getting book data
const [obj, setObj] = useState({});
const [sort, setSort] = useState({ sort: "rating", order: "desc" });
const [filterGenre, setFilterGenre] = useState([]);
const [page, setPage] = useState(1);
const [search, setSearch] = useState("");
const [isMistDropdownOpen, setIsMistDropdownOpen] = useState(false);
const [rom , setRom] = useState([]);                                                                                                                        
const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);



const scrollToCard = () => {
  const cardElement = document.getElementById('book-row');
  if (cardElement) {
    cardElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const displayNoResultsMessage = () => {
  const messageElement = document.getElementById('noResultsMessage');

  if (messageElement) {
    scrollToCard();
    messageElement.style.display = 'block';
  }
};

const handleNoResults = () => {
  setShowNoResultsMessage(true);
  displayNoResultsMessage(); // Display the message when there are no results
};


useEffect(() => {
  const getAllBooks = async () => {
    try {
      const url = `${base_url}?page=${page}&sort=${sort.sort},${
        sort.order
      }&genre=${filterGenre.toString()}&search=${search}`;
      const { data } = await axios.get(url);
      if (!data.books || data.books.length === 0) {
        handleNoResults();
      } 
      else {
      setObj(data);
      setShowNoResultsMessage(false);
      }
  
    // Fetch specific hits section-wise
    const romUrl = `${base_url}?limit=3&page=${page}&sort=${sort.sort},${sort.order}&search=${search}&genre=Romance`;
    const { data: romData } = await axios.get(romUrl);
    setRom(romData.books);
  
    } catch (err) {
      console.log(err); 
      setShowNoResultsMessage(true);

    }
  };

  getAllBooks();
}, [sort, filterGenre, page, search]);



  // Function to toggle the accordion and arrow
  const toggleMistDropdown = () => {
    setIsMistDropdownOpen(!isMistDropdownOpen);
  };


// For Search box 


 
// for newsletter
function Newso() {
    document.getElementById('newsletter').style.display='block';
}

function Oldso() {
    document.getElementById('newsletter').style.display='none';
}

// Open and close sidebar
function w3_open() {
  document.getElementById('mySidebar').style.display = 'block';
  document.getElementById('myOverlay').style.display = 'block';
}
 
function w3_close() {
  document.getElementById('mySidebar').style.display = 'none';
  document.getElementById('myOverlay').style.display = 'none';
}
   
    return (
        <>
        <title>booksplash.com</title>
<head>        
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<body class="w3-content" style={{width:"100%"}} />

{/* <!-- Sidebar/menu --> */}

<nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{zIndex: "3", width: "250px"}} id="mySidebar" >
  <div class="w3-container w3-display-container w3-padding-16" style={{margin:0}} >
    <i id="cross" onClick={w3_close} class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
    <h3 class="w3-wide"><b><img src={BLogo} style={{width:"58px",height:"59px"}}/>BOoKsPlaSh</b>
    <hr style={{marginTop:"10px",borderWidth:"3.5px"}}/>
    <hr style={{marginTop:"8px",borderWidth:"2.5px"}}/>
    <hr style={{marginTop:"6 px",borderWidth:"2.2px"}}/>
    </h3>
  </div>

  <div class="w3-padding-64 w3-large w3-text-grey" style={{fontWeight: "bold"}}>
    <a href="/" class="w3-bar-item w3-button">Books_All of them</a>
    {/* <a href="#book-row" class="w3-bar-item w3-button">Novels</a>
    <a href="#" class="w3-bar-item w3-button">Comics</a> */}
    <hr style={{height:"-20px",borderWidth:"2px"}}/>
    <Genre
			filterGenre={filterGenre}
			genres={obj.genres ? obj.genres : []}
		  setFilterGenre={(genre) => setFilterGenre(genre)} scrollToCard={scrollToCard}	/>

     {/* accordion with arrow care changer */}
    <div>
    {/* Accordion with arrow caret changer */}
    <a
      onClick={toggleMistDropdown}
      href="javascript:void(0)"
      className="w3-bar-item w3-button"
    >
      {/* Add the down class conditionally based on the state */}
      <i className={`fas fa-chevron-${isMistDropdownOpen ? "down" : "right"}`}></i> Filter Here
    </a>
    <div  className={`w3-bar-blockA ${isMistDropdownOpen? "w3-show" : ""} w3-padding-large w3-medium`}>
      <Sort sort={sort} setSort={(sort) => setSort(sort)} scrollToCard={scrollToCard} />
      {/* <a href="#" class="w3-bar-item w3-button">author</a>
      <a href="#" class="w3-bar-item w3-button"></a>
      <a href="#" class="w3-bar-item w3-button"></a> */}
    </div>
  </div>

    {/* <Link to="" class="w3-bar-item w3-button">Social</Link> */}
    {/* <a href="#" class="w3-bar-item w3-button">Collab/Partners</a> */}
    <Link to="/about" class="w3-bar-item w3-button">About Booksplash</Link>

  </div>

  <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding" onClick={Newso} >Newsletter</a> 
</nav>

{/* <!-- Top menu on small screens --> */}

<header class="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
  <div class="w3-bar-item w3-padding-23 w3-wide">
  <img src={BLogo} style={{width:"52px",height:"52px",marginTop:"9px",marginBottom:"6px"}} />
  </div>
  <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-24 w3-right" 
	style={{padding:"20px 15px 25px 20px", marginTop:"0px"}}
	  onClick={w3_open}><i class="fa fa-bars"></i></a>
</header>

{/* <!-- Overlay effect when opening sidebar on small screens --> */}
<div class="w3-overlay w3-hide-large" onClick={w3_close} style={{cursor: "pointer"}} title="close side menu" id="myOverlay"></div>

{/* <!-- !PAGE CONTENT! --> */}
<div class="w3-main" style={{marginLeft: "250px"}}>

  {/* <!-- Push down content on small screens --> */}
  <div class="w3-hide-large" style={{marginTop: "83px"}}></div>
  
  {/* <!-- Top header --> */}
  <header class="w3-container w3-xlarge">
    <p class="w3-left">Read as much...whatever you want,whenever you want 
        <br/>
        <hr style={{marginTop:"18px",borderWidth:"2.5px"}}/><br/>
    </p>
   
      <form onSubmit={(e) => e.preventDefault()}>
        <div class="search">
          <p class="w3-right">
        <Search  
        setSearch={(search) => setSearch(search)} scrollToCard={scrollToCard} handleNoResults={handleNoResults} /> 
      </p>
      </div>
     </form>    
 
    <br/>
    <p style={{float: "left"}}>- No strings attached</p> 
  </header>

  {/* <!-- Image header --> */}

  <div class="w3-display-container w3-container">
    <video width="100%" autoPlay="true" loop="true" muted>
        <source src= {Vid} type="video/mp4" />
        <img src="../Assets/Spid.mp4" style={{width:"100%"}} />
    </video>

    <div class="w3-display-topleft w3-text-white" style={{padding:"24px 48px"}}>
      {/* <h1 class="w3-jumbo w3-hide-small">Newly Dropped !</h1> */}
      <h1 class="w3-hide-large w3-hide-medium"></h1>
      {/* <h1 class="w3-hide-small">Paradise Lost</h1> */}
      {/* <p><a href="#jeans" class="w3-button w3-white w3-padding-large w3-large">Read Now !</a></p> */}
    </div>
  </div>

  <div class="w3-container w3-text-grey" id="jeans">
    <p>Select Your Choose!</p>
  </div>
    <br/>
  <Pagination
							page={page}
							limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)}
						/>  
     
  {/* <!-- Product grid --> */}
  <div id="book-row" class="rowE">
  <div id="noResultsMessage" style={{display: showNoResultsMessage ? 'flex' : 'none' }}>
        {`Sorry Dear, No such book - ${search} found! Did you spell it correct ? 
        or just spell part of it which you know and it's fully correct`}
  </div>
  </div>
  <br/><br/><br/>
  
  <div id="book-row" class="rowH">
  <Card books={obj.books ? obj.books : []} />
  </div>

  <hr/>
  {/* <h3 style={{marginLeft:"10px"}}>Best Rom-Com Hits!</h3>
   <div id="book-row" class="rowH">
     <Card books={rom} />
   </div>   */}

   <br/>
   <Pagination
							page={page}
							limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)}
						/>  
   <br/>
    {/* <!-- Subscribe section --> */}
  

    {/* <div class="w3-container w3-black w3-padding-32"  
    style={{backgroundColor:"black",padding:"32"}} id="newslet">
            
            <h1>Subscribe</h1>
            <p>To get special early notifications & stuff</p>
            <p><input class="Images/IMG-01.jpg" type="text" placeholder="Enter e-mail" style= {{width: "100%"}} /></p>
            <button type="button" class="w3-button w3-red w3-margin-bottom">Subscribe</button>
        
    </div> */}
        
  
   {/* <!-- Footer --> */}
    <footer style={{fontSize:"small",backgroundColor:"#d9b8f4",textAlign:'center'}}>
     <div class="w3-row-padding">
       <div class="w3-col">
        <h4>Contact</h4>
        <p>Questions/Queries? Go Right ahead<br/>
        Wish to collaborate or publish your own book<br/>
         Do'not hesitate to reach us</p>
        <form action="https://formsubmit.co/f1c4efcbc2dc0326a61c8eda5674d758" method="POST" target="_blank">
          <p><input class="w3-input" type="text" placeholder="Name" name="Name" required /></p>
          <p><input class="w3-input" type="email" placeholder="Email" name="Email" required /></p>
          <p><input class="w3-input" type="text" placeholder="Subject" name="Subject" required /></p>
          <p><textarea class="w3-input" type="text" placeholder="Message/Query just jot .." name="Message" required /></p>
          <button type="submit" class="w3-button w3-block w3-black" style={{width:"20%"}}>Send</button>
          <br/>
        </form>
      </div>

      <div class="w3-col ">
        <h4>Support</h4>  
        <p>Donations heartily only</p>
        <p>No matter how small!</p>
        <button class="w3-button w3-blue">
	{/* https://paypal.me/donations176?country.x=IN&locale.x=en_GB */}
        <a href="" 
        className="link">
	Donate!</a></button>
        {/* <p><a href="">Help</a></p> */}
      </div>


    </div>
  </footer>

  <footer id="" class="w3-center w3-black w3-padding-64" style={{backgroundColor:"black"}} >
    <Link className="link" to="" style={{textAlign:"center",color:"whitesmoke",marginBottom:"15px"}}>Good Read!</Link>
            <div clas="w3-xsmall w3-section" style={{color:"whitesmoke",fontSize:"10px"}}> 
            <p style={{marginTop:"26px",marginBottom:"-8px"}}>copyright©
                booksplash.com</p>
            <p style={{}}>All rights reserved</p>     
            </div> 
    </footer>

   
  {/* <div class="w3-black w3-center w3-padding-24" style={{maxWidth:"1200px"}}><a href=""  target="_blank" class="w3-hover-opacity">Reading Folks</a></div> */}

  {/* <!-- End page content --> */}
</div>

  {/* <!-- Newsletter Modal --> */}
<div id="newsletter" class="w3-modal">
  <div class="w3-modal-content w3-animate-zoom" style={{padding: "32px"}}>
    <div class="w3-container w3-white w3-center">
      <i onClick = {Oldso} class="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"></i>
      <h2 class="w3-wide">NEWSLETTER</h2>
      <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
      <p>P.S. Newsletter services are unavailable at the moment<br/>
      It will be back soon, excuse us!</p>
      <p> <input class="w3-input w3-border" style={{outline:0}} type="text" placeholder="Enter e-mail" disabled/></p>
      <button type="button" class="w3-button w3-padding-large w3-red w3-margin-bottom" onClick={Oldso}>Subscribe</button>
    </div>
  </div>
</div>
        
        </>
    );
}
