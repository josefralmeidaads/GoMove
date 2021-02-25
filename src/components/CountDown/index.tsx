import React, { useEffect, useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import {
  Container,
  ButtonInicioChallenge, 
  ContainerTimer,
  TimerMinutes,
  Minutes,
  SplitSecond,
  TimerSeconds,
  Seconds,
  ButtonHasFinished, 
} from './styles';
import { useCountDown } from '../../context/CountDownContext';


const CountDown: React.FC = () => {
  const { isActive, hasFinished, minutes, seconds, startOrResetCountDown } = useCountDown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <ContainerTimer>
        <TimerMinutes>
          <Minutes>{minuteLeft}</Minutes>
          <Minutes>{minuteRight}</Minutes>
        </TimerMinutes>
          
        <SplitSecond>:</SplitSecond>

        <TimerSeconds>
          <Seconds>{secondsLeft}</Seconds>
          <Seconds>{secondsRight}</Seconds>
        </TimerSeconds>  
        
      </ContainerTimer>

      { hasFinished ? (
        <ButtonHasFinished
          disabled
          type="button"
        >
          Ciclo encerrado
          <CheckCircleIcon 
            
          />
        </ButtonHasFinished>
      ):

      (<ButtonInicioChallenge type="button" isActive={!!isActive} onClick={() => startOrResetCountDown(isActive)}>
        {isActive ? 'Abandonar Ciclo' : 'Iniciar um ciclo'}
      </ButtonInicioChallenge>)}
    </Container>
  );
}

export default CountDown;