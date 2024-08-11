
import React from 'react';
import Home from './Components/Home/home';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Bookse from './Components/Copies/mve';
import About from './Components/About/about';

function App() {
  return (
    	 <>
	<HashRouter>
	  <Routes>
		<Route path = "/" element = {<Home/>} />
		<Route path = "/home" element = {<Home/>} />
		<Route path = "/books/:id" element = {<Bookse/>} />
		<Route path='/about' element = {<About/>} />

	  </Routes>
	</HashRouter>
	  </>	
  
    
  );
}

export default App;
