import React, { useState, useEffect } from 'react';
import CircularProgressBar from './CircularProgressBar';

type iprops={
  active: number
}
function ProgressOficial(props:iprops) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= props.active) {
          return 0; // Reinicia o progresso quando atinge 100%
        }
        return prevProgress + 1; // Incrementa o progresso em 1%
      });
    }, 300); // Atualiza a cada 100ms

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, [props.active]);

  return (
    <div className="flex flex-col items-center justify-center ">
      <CircularProgressBar
        progress={progress}
        className01="text-red-500"
        textColor="text-blue-500" // Personalize a cor do texto aqui
      />
    </div>
  );
}

export default ProgressOficial;