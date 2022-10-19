
import items from './items';
import { NavbarLi, NavList, Menu } from './NavbarMenu.styled';

export default function NavbarMenu() {
  const elements = items.map(({ id, to, text }) => {
    return (
      <NavbarLi key={id}>
        <NavList to={to} end>{text}</NavList>
      </NavbarLi>
    );
  });
  return <Menu>{elements}</Menu>;
}
