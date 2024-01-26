import React, { useEffect, useState } from "react";
import "../../styles/home/servicesicons.css"
import { househubIcon, foodhubIcon, buyandsellIcon } from "../../assets";
import { useNavigate } from 'react-router-dom';

export default function ServicesLogo() {
  const navigate = useNavigate();

  // const [isSticky, setSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = 600;
  //     setSticky(window.pageYOffset >= offset);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    // <div className={isSticky ? "sticky" : "" }>
    //   <div className='services-container' id="services-container">
    //     <div className={isSticky ? 'service-card-sticky' : 'service-card'} onClick={()=>navigate("/househub")}>
    //       <img src={househubIcon} alt="" className={isSticky ? 'service-image-sticky' : 'service-image'} />
    //       <p className={isSticky ? 'service-name-sticky' : 'service-name'}>Househub</p>
    //     </div>
    //     <div className={isSticky ? 'service-card-sticky' : 'service-card'} onClick={()=>navigate("/foodhub")}>
    //       <img src={foodhubIcon} alt="" className={isSticky ? 'service-image-sticky' : 'service-image'} />
    //       <p className={isSticky ? 'service-name-sticky' : 'service-name'}>FoodHub</p>
    //     </div>
    //     <div className={isSticky ? 'service-card-sticky' : 'service-card'}>
    //       <img src={buyandsellIcon} alt="" className={isSticky ? 'service-image-sticky' : 'service-image'} />
    //       <p className={isSticky ? 'service-name-sticky' : 'service-name'}>Buy And Sell</p>
    //     </div>
    //   </div>
    // </div>
    <div>
    <div className='services-container' id="services-container">
      <div className='service-card' onClick={()=>navigate("/househub")}>
        <img src={househubIcon} alt="" className='service-image' />
        <p className='service-name'>Househub</p>
      </div>
      <div className='service-card' onClick={()=>navigate("/foodhub")}>
        <img src={foodhubIcon} alt="" className='service-image' />
        <p className='service-name'>FoodHub</p>
      </div>
      <div className='service-card'>
        <img src={buyandsellIcon} alt="" className='service-image' />
        <p className='service-name'>Buy And Sell</p>
      </div>
    </div>
  </div>
  );
}
