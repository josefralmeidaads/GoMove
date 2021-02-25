import styled from 'styled-components';

interface CurrentExpProps {
  currentExp: number;
}

export const ExperienceBarr = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1rem;
  }

`;

export const BarraExp = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.gray_line};
  margin: 0 1.5rem;
  position: relative;
`;

export const BarraPercent = styled.div<CurrentExpProps>`
  width: ${props => props.currentExp}%;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.green};
`;

export const CurrentExperience = styled.span<CurrentExpProps>`
  position: absolute;
  left: ${props => props.currentExp}%;
  transform: translateX(-50%);
`;
