import Container from "../../Layout/Container";
import Category from "./Category";
import Gender from "./Gender";

const Navigation = ({ list }) => (
  <nav>
    <Container>
      <Gender list={list} />
      <Category list={list} />
    </Container>
  </nav>
);

export default Navigation;
