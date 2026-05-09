import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 24px;
  padding: 16px;
  margin-top: 16px;
`;

export const Title = styled.h3`
  margin-bottom: 14px;
  font-size: 18px;
`;

export const LevelList = styled.div`
  display: flex;
  gap: 10px;
`;

export const Level = styled.span`
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;

  background-color: ${({ active }) =>
    active ? '#ff7f7f' : '#f1e8c9'};

  color: ${({ active }) => (active ? '#fff' : '#666')};

  transform: ${({ active }) => (active ? 'scale(1.05)' : 'scale(1)')};
`;