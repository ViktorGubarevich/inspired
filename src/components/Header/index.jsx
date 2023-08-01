import Navigation from "./Navigation";
import Top from "./Top";

const Header = ({list}) => (
  <header>
    <Top />
    <Navigation list={list} />
  </header>
);

export default Header;
