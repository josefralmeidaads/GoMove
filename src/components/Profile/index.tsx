import React from 'react';

import { 
  Container,
  ProfileImg,
  User,
} from './styles';
import { useChallenge } from '../../context/ChallengesContext';

const Profile: React.FC = () => {
  const { level } = useChallenge();

  return (
    <Container>
      <ProfileImg src="https://avatars.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4" alt=""/>
      <User>
        <strong>Jose Francisco</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </User>
    </Container>
  );
}

export default Profile;