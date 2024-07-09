import React from "react";
import {Link} from "react-router-dom";
import  "./styles.css";

const Card  = ({books}) => {
 
    return(
        <>
               {books.map((book) => ( 
        <>
        
       <div class="columnbk">
        <br/><br/>
        <div class="cardbk" key={book._id} style={{alignItems:"center",alignSelf:"center"}}>
          
          {/* <span class="w3-tag" style={{float: "left", backgroundColor: "blueviolet"}} >New</span> */}
          <span class="w3-tag" style={{float: "left", backgroundColor: "blueviolet"}}>New</span>

            <br/>
          <h4>{book.name} <br/>{book.year}</h4>
          <div class="flip-box" >
      <div class="flip-box-inner" >
        <div class="flip-box-front" style={{backgroundColor:"#f1f1f1"}} > 
          <img className="photo" src={book.img} alt="Paris" style={{width: "70%", height: "100%"}} />
        </div>
        <div class="flip-box-back">
          <br/>
          <p>Author-{book.author}</p>
          <br/>
          {book.genre.map((genre, index) => (
        <p>{genre} {index !== book.genre.length - 1 && "/"}</p>
              ))}                        
         
        </div>
      </div>
    </div>
    <br/><br/><br/><br/>
      
      {/* <button class="w3-button w3-grey" id="butcard">Watch Now <i class="fa fa-eye"></i></button> <br/><br/> */}
      <button class="w3-button w3-grey"><Link className="link" to = {`/books/${book._id}`}>Download<i class="fa fa-download" />
      </Link></button>
      <br/><br/>
        </div>
        <br/>
        
      </div>
      
   
      </>
        ))}
   </>
      );

    };

export default Card;