import React, { useState, useEffect } from 'react';
import CircularProgressBar from './CircularProgressBar';

type Props = {
  active: number;
};

const ProgressOficial: React.FC<Props> = ({ active }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= active) {
      return; // Para a atualização quando o progresso atingir o valor 'active'
    }

    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress + 1);
    }, 300); // Atualiza a cada 300ms

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, [progress, active]);

  useEffect(() => {
    setProgress(0); // Reseta o progresso quando o valor 'active' muda
  }, [active]);

  return (
    <div className="flex flex-col items-center justify-center">
      <CircularProgressBar
        progress={progress}
        className01="text-red-500"
        textColor="text-blue-500" // Personalize a cor do texto aqui
      />
    </div>
  );
};

export default ProgressOficial;
