import { NavigationBar, Row, LinkLogo } from './Navbar.styled';
import NavbarMenu from 'components/NavbarMenu';
import { FcFilm } from 'react-icons/fc';

export default function Navbar() {
  return (
    <NavigationBar>
      <Row>
        <LinkLogo to="/"><FcFilm size="50px" /></LinkLogo>
        <NavbarMenu />
      </Row>
    </NavigationBar>
  );
}
