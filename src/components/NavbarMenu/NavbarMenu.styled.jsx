import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-left: 40px;
  font-size: 20px;
`;

export const NavbarLi = styled.li`
  text-decoration: none;
  display: inline-block;
  align-items: center;
  font-weight: 700;
  margin-right: 20px;

  &:last-child{
    margin-right: 0;
  }


`;

export const NavList = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: darkslategrey;
  padding: 10px 15px;
  border-radius: 10px;
  

  &.active {
    color: darkred;
  }
`;
