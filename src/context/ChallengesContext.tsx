import { createContext, useState, ReactNode, useContext } from 'react';
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface UseChallengeData {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  levelUp():void,
  startNewChallenge():void,
  resetChallenge():void,
  completeChallenge():void,
  activeChallenge: Challenge,
  experienceToNextLevel: number,
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

const ChallengesContext = createContext<UseChallengeData>({} as UseChallengeData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps ) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
  }

  const startNewChallenge = () => {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];

    setActiveChallenge(challenge);
  }

  const resetChallenge = () => {
    setActiveChallenge(null);
  }

  const completeChallenge = () => {
    if(!activeChallenge){
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return(
    <ChallengesContext.Provider 
      value={{ 
        level, 
        currentExperience, 
        challengesCompleted, 
        levelUp, 
        startNewChallenge, 
        resetChallenge,
        completeChallenge,  
        activeChallenge, 
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

export function useChallenge ():UseChallengeData {
  const context = useContext(ChallengesContext);

  if(!context){
    console.log('Não existe nenhum contexto informado!')
  }

  return context;
}
