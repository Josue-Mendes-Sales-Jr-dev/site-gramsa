'use client'
import { useState, useEffect } from 'react';

const ProgressNumber = ({ maxProgress }:any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < maxProgress) {
          return prev + 10;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 80); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }, [maxProgress]);

  return (
    <div className="flex flex-col items-center h-[4rem] w-[10rem] text-white">
      <div className="text-[3.5rem] md:text-[5rem] font-bold">{progress}%</div>
    </div>
  );
};

export default ProgressNumber;