import React from 'react';
import { useChallenge } from '../../context/ChallengesContext';

import { 
  Container,
  DesafiosCompletos,
  QtdDesafiosCompletos, 
} from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenge();
  return (
    <Container>
      <DesafiosCompletos>
        Desafios Completos
      </DesafiosCompletos>

      <QtdDesafiosCompletos>
        {challengesCompleted}
      </QtdDesafiosCompletos>
    </Container>
  );
}

export default CompletedChallenges;