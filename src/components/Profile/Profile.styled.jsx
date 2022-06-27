import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 64px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Description = styled.div`
  background-color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 16px;
`;

export const Avatar = styled.img`
  display: block;
  max-width: 250px;
  height: auto;
  margin: 0;
  margin-bottom: 8px;
`;
export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;
export const Tag = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;
export const Location = styled.p`
  font-size: 16px;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  background-color: rgb(199, 177, 177);
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  min-width: 70px;
`;
export const StatsTitle = styled.span`
  font-weight: 600;
`;
export const StatsQuantity = styled.span`
  font-size: 14px;
`;
