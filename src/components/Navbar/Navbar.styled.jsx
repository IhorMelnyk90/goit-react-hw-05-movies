import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationBar = styled.nav`
    box-shadow: rgb(200 200 200) 0px 2px 10px;
`;

export const Row = styled.div`
    padding-top: 10px;
    padding-bottom:10px;
    padding-left: 25px;

    display: flex;
    justify-content: start;
    align-items: center;
    
`;

export const LinkLogo = styled(Link)`
    text-decoration: none;
`;
