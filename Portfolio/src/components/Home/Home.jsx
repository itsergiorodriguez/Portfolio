import React from 'react';
import Styles from './Home.module.css'; 
import Carousel from '../Carousel/Carousel';

const Home = () => {
  return (
    <div className={Styles.container}>
         <Carousel/>
    </div>
  );
}

export default Home;
