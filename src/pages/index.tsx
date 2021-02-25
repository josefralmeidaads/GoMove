import React from 'react';

import { 
  Container,
  SectionUser,
  SecaoDireita,
  SecaoEsquerda, 
} from '../styles/styles';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ChallengeBox from '../components/ChallengeBox';

export default function Home() {
  return (
    <Container>
      <ExperienceBar />
      <SectionUser>

        <SecaoEsquerda>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </SecaoEsquerda>

        <SecaoDireita>
          <ChallengeBox />
        </SecaoDireita>
      </SectionUser>
    </Container>
  )
}
