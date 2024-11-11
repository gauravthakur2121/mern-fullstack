import React from 'react';
import Header from './Header';
import ImageList from './ImageList';
import Workscompany from './Workcompany';
import Carddata from './Carddata';
import Contact from './Contact';
import Success from './Success';
import Userlogindata from '../shares/Userlogindata';
import Charts from './Charts';

const Codesqude = () => {
  return (
    <div>
      <Userlogindata/>
         <Header />
      <ImageList />
      <Workscompany />
      <Carddata />
      <Contact />
      <Success />
      <Charts/>
     
      
    </div>
  )
}

export default Codesqude
