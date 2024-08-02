"use client";
import Image from "next/image";
import Img from "../../images/gramsa1.jpeg"
import Img01 from "../../images/mina4.avif"
import Img02 from "../../images/mina3.jpg"

import { useEffect } from "react";
import Title from "./text";

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <>
    <div
  id="carouselExampleCaptions"
  className="relative"
  data-twe-carousel-init
  data-twe-ride="carousel">
  <div
    className="absolute bottom-0 left-0 right-0 z-[30] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-twe-carousel-indicators>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="0"
      data-twe-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="1"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-twe-target="#carouselExampleCaptions"
      data-twe-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>

  <div
    className="relative w-[100vw] overflow-hidden after:clear-both after:block after:content-['']">
    <Title
        Text1="Engineering solution"
        text2="for industrialasset" 
        text3="lifecycle management."
        className={`absolute w-[80%] h-[30%] z-[30] left-[10rem] top-[18rem]`}/>
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-active
      data-twe-carousel-item
      style={{ backfaceVisibility: "hidden"}}>
        <div className="top-0 absolute z-10 w-[100%] h-[100%] bg-black opacity-30">
        </div>
      <Image
        src={Img}
        className="block w-full h-[100vh] object-cover"
        alt="..." />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        
      </div>
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      style={{backfaceVisibility: "hidden"}}>
        <div className="top-0 absolute z-20 w-[100%] h-[100%] bg-black opacity-30">
        </div>
       <Image
        src={Img01}
        className="block w-full h-[100vh] object-cover"
        alt="..." />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        
      </div>
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      style= {{ backfaceVisibility: "hidden"}}>
        <div className="top-0 absolute z-20 w-[100%] h-[100%] bg-black opacity-30">
        </div>
      <Image
        src={Img02}
        className="block w-full h-[100vh] object-cover"
        alt="..." />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      
      </div>
    </div>
  </div>

  <button
    className="absolute bottom-0 left-0 top-0 z-[20] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselExampleCaptions"
    data-twe-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  <button
    className="absolute bottom-0 right-0 top-0 z-[20] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselExampleCaptions"
    data-twe-slide="next">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
</>
  );
  
}
export default Carousel;