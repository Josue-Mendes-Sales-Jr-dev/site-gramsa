import React, { useEffect, useState } from 'react';

type CircularProgressBarProps = {
  progress: number;
  className01?: string;
  textColor?: string; // Adicione uma propriedade para a cor do texto
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress, className01 = 'text-blue-950', textColor = 'text-green-500' }) => {
  const radius = 150;
  const stroke = 15;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const [animatedProgress, setAnimatedProgress] = useState(progress);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedProgress(progress), 100);
    return () => clearTimeout(timeout);
  }, [progress]);

  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

  return (
    <svg
      className="transform -rotate-90"
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        className="text-gray-300"
        strokeWidth={stroke}
        stroke="currentColor"
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className={`${className01} text-red-900 transition-all duration-500 ease-in-out`}
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className={`text-2xl font-bold ${textColor}`} // Use a cor personalizada aqui
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
