import React from 'react';
import { useChallenge } from '../../context/ChallengesContext';
import { useCountDown } from '../../context/CountDownContext';

import { 
  Container,
  ChallengeNotActive,
  ChallengeActive,
  HeaderXp,
  Main,
  Footer,
  ButtonFalhei,
  ButtonCompletei, 
} from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenge();
  const { startOrResetCountDown} = useCountDown();

  const handleChallengeSucceded = () => {
    completeChallenge();
    startOrResetCountDown(true);
  }

  const handleChallengeFailed = () => {
    resetChallenge();
    startOrResetCountDown(true);
  }

  return (
    <Container>
      { activeChallenge ? (
        <ChallengeActive>
          <HeaderXp>Ganhe {activeChallenge.amount}xp</HeaderXp>

          <Main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="corpo"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </Main>

          <Footer>
            <ButtonFalhei 
              type="button"
              onClick={() => handleChallengeFailed()}
            >
              Falhei
            </ButtonFalhei>

            <ButtonCompletei 
              type="button"
              onClick={() => handleChallengeSucceded()}
            >
              Completei
            </ButtonCompletei>
          </Footer>
        </ChallengeActive>
      ) 
        : 
      (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up"/>
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}

export default ChallengeBox;