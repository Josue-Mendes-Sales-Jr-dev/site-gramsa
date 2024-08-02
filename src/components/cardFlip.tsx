'use client';

import React, { useState } from 'react';
import styles from './CardFlip.module.css'; // Importar o módulo CSS
import { FaCheckDouble } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";


type IcardFlip ={
    textFront: string
    textBack: string
}
const CardFlip = ({textFront, textBack}:IcardFlip) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center items-center w-[16rem] h-[10rem] ">
      <div
        className={`relative w-full h-full perspective-1000 ${isFlipped ? styles.flipped : ''}`}
        onClick={handleFlip}
      >
        <div className={`absolute w-full h-full flex items-center justify-center bg-white rounded-lg  ${styles.card} ${styles.front}`}>
          <div className=' text-blue-900 flex flex-col items-center justify-center gap-2'>
            <h2 className="font-semibold text-[2rem]">
                {textFront}
            </h2>
            <TbHandClick className='text-[2rem]'/>
          </div>
        </div>
        <div className={`absolute w-full h-full flex items-center justify-center bg-blue-950 rounded-tl-3xl rounded-br-3xl text-white    ${styles.card} ${styles.back}`}>
          <div>
            <h2 className="text-lg font-semibold">Verso do Cartão</h2>
            <p>{textBack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
