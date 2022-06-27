import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  min-width: 180px;
  border: 2px solid rgba(71, 64, 173, 0.582);
  border-radius: 5px;
  box-shadow: 8px 14px 20px -6px rgba(0, 0, 0, 0.54);
`;

export const OnlineStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const Name = styled.p`
  font-size: 16px;
`;
