import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: blueviolet;
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const List = styled.ul`
  padding: 15px;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Title2 = styled.h2`
  margin-bottom: 15px;
`;

export const Title3 = styled.h3`
  margin-bottom: 15px;
`;

export const GenreBox = styled.div`
  display: flex;
`;

export const MovieInfoBox = styled.div`
  padding: 15px;
`;

export const MovieInfo = styled.p`
  margin-bottom: 20px;
  font-size: large;
  font-weight: bold;
`;

export const MovieInfoLink = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const MovieNavLink = styled(NavLink)`
  color: darkslategrey;

  &.active {
    color: darkred;
  }
`;
