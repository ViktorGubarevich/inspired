import { useParams } from "react-router-dom";
import Container from "../Layout/Container";

const MainPage = ({ gender = "women" }) => {
  const { category } = useParams();

  return (
    <Container>
      <div>Main Page {gender}</div>
      {category && <p>Категория: {category} </p>}
    </Container>
  );
};

export default MainPage;
