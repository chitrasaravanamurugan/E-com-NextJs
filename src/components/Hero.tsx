"use client";
import React from 'react'
import  Slide  from './Slide';
import Slider from "react-slick";

export const Hero = () => {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
      };

      const slideData =[
      {
        id:0,
        img:"/banner-1.jpg",
        title:"Trending Item",
        mainTitle:"WOMEN'S LATEST ",
        price:"$20",

      },
      {
        id:1,
        img:"/banner-2.jpg",
        title:"Trending Accessories",
        mainTitle:"MODERN SUN GLASSES",
        price:"$25",

      },
      {
        id:2,
        img:"/banner-3.jpg",
        title:"Sale Offer",
        mainTitle:"NEW FASHION SUMMER SALE",
        price:"$30",

      },
    ]
  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item)=>{
                    return<Slide 
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}></Slide>

                })}
            </Slider>
        </div>
    </div>
  )
}
