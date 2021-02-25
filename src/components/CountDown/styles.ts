import styled, { css } from 'styled-components';

interface ButtonInicioChallengeProps {
  isActive: boolean
}

export const Container = styled.div`

`;

export const ContainerTimer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani';
  font-weight: 600;
  color: ${props => props.theme.colors.title};
`;

export const TimerMinutes = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.theme.colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span:first-child {
    border-right: 1px solid #F0F1F3;
  }

  span:last-child {
    border-left: 1px solid #F0F1F3;
  }
`;

export const Minutes = styled.span`
  flex: 1;
`;

export const SplitSecond = styled.span`
  font-size: 6.25rem;
  margin: 0 0.5rem;
`;

export const TimerSeconds = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.theme.colors.white};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span:first-child {
    border-right: 1px solid #F0F1F3;
  }

  span:last-child {
    border-left: 1px solid #F0F1F3;
  }
`;

export const Seconds = styled.span`
  flex: 1;
`;

export const ButtonInicioChallenge = styled.button<ButtonInicioChallengeProps>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  transition: background-color 0.5s;
  font-size: 1.25rem;
  font-weight: 600;

  ${props => props.isActive ? 
  css`
    background-color: ${props => props.theme.colors.red};
    &:hover{
      background-color: ${props => props.theme.colors.red_dark};
    }
  ` 
  : 
  css`
    background-color: ${props => props.theme.colors.blue};
    &:hover{
      background-color: ${props => props.theme.colors.blue_dark};
    }
  `}
`;

export const ButtonHasFinished = styled.button`
  display: flex;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  border: 0;
  border-bottom: 4px solid ${props => props.theme.colors.green};
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  background-color: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  cursor: not-allowed;

  svg {
    color: ${props => props.theme.colors.green};
    margin-left: 0.5rem;
  }
`;
