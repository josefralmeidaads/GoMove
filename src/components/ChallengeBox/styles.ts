import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const HeaderXp = styled.header`
  color: ${props => props.theme.colors.blue};
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.25rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray_line};
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-weight: 600;
    font-size: 2rem;
    color: ${props => props.theme.colors.title};
    margin: 1.5rem 0  1rem;
  }

  p {
    line-height: 1.5;
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const ButtonFalhei = styled.button`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.red};
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${props => props.theme.colors.red_dark};
  }
`;

export const ButtonCompletei = styled.button`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  font-size: 1rem;
  font-weight: 600;

  transition: background-color 0.5s;

  &:hover {
    background-color: ${props => props.theme.colors.green_dark};
  }
`;
