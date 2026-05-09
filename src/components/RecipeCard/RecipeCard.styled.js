import styled, { css } from 'styled-components';


export const Card = styled.li`
  width: 280px;
  padding: 14px;
  border-radius: 28px;

  transition: transform 250ms ease;

  &:hover {
    transform: translateY(-5px);
  }

  ${({ hard }) =>
    hard &&
    css`
      transform: scale(1.03);
    `}
`;

export const Image = styled.img`
  height: 260px;
  object-fit: cover;
  border-radius: 24px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 16px;
  font-size: 20px;
  color: black;

`;

export const InfoBox = styled.div`
  margin-top: 16px;
  background-color: #fff;
  border-radius: 30px;
  padding: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-weight: 600;

  span {

    gap: 4px;
    
  }

  svg {
    color: black;
    font-size: 15px;
  }
`;