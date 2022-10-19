import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  justify-items: center;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;    
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 15px;
`;

export const CastItem = styled.li`
  border: 1px solid yellow;
  width:100px;
  border-radius: 20px;
  background-color: aqua;  
  padding: 10px;
`;

export const CastImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 150px;
  margin-bottom: 15px;
`;

export const CastText = styled.p`
  margin-bottom: 10px;
  font-size: medium;
  font-weight: bold;
  color: black;
`;
