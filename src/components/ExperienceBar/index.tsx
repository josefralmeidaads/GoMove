import React from 'react';

import { 
  ExperienceBarr, 
  BarraExp,
  BarraPercent,
  CurrentExperience,
} from './styles';
import { useChallenge } from '../../context/ChallengesContext';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallenge();

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ExperienceBarr>
      <span>0 xp</span>
      <BarraExp >
        <BarraPercent currentExp={percentToNextLevel}/>
        <CurrentExperience currentExp={percentToNextLevel}>{currentExperience}xp</CurrentExperience>
      </BarraExp>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarr>
  );
}

export default ExperienceBar;