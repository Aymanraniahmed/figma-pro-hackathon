import React from 'react';
import Navbar from './components/nav';
import Footer from './components/footer';

import Categories from './components/categories';
import Sectionone from './components/Sectionone';
import Sectiontwo from './components/sectiontwo';
import Sectionfour from './components/sectionfour';
import Sectionfive from './components/sectionfive';
import Sectionsix from './components/sectionsix';
import Sectionsevn from './components/sectionsevn';
// import Navbar from 'Navbar'; // Ensure the correct path to Navbar component

const Home = () => {
  return (
    <div>

<Navbar/>
      
      <Sectionone />
      <Sectiontwo />
      <Sectionfour/>
      <Sectionfive/>
      <Sectionsix/>
       <Sectionsevn/>
       {/* Correctly closed Navbar component */}
       {/* <a href="">about</a> */}
     

       
    </div>
  );
};

export default Home;
