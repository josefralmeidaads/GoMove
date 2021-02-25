import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useChallenge } from './ChallengesContext';

interface CountDownProps {
  children: ReactNode;
}

interface CountDownContextData {
 isActive: boolean;
 hasFinished: boolean;
 minutes: number;
 seconds: number;
 startOrResetCountDown(boolean):void;
}

const CountDownContext = createContext<CountDownContextData>({} as CountDownContextData);

let countDownTimeout: NodeJS.Timeout;

export const CountDownProvider = ({ children }: CountDownProps) => {
  const { startNewChallenge } = useChallenge();
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startOrResetCountDown = (_isActive) => {
    if(_isActive === true){
      clearTimeout(countDownTimeout);
      setIsActive(false);
      setTime(0.1*60);
      setHasFinished(false);
      return;
    }

    setIsActive(true);
  }

  useEffect(() => {
    if(isActive && time > 0){
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }

  }, [isActive, time]);

  return (
    <CountDownContext.Provider 
      value={{
        isActive,
        hasFinished,
        minutes,
        seconds,
        startOrResetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}

export function useCountDown():CountDownContextData {
  const context = useContext(CountDownContext);
  if(!context){
     console.log('Não existe contexto informado')
  }

  return context;
}