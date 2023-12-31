import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "../../Layout/Container";
import Category from "./Category";
import Gender from "./Gender";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice";

const Navigation = ({ list }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const gender = location.pathname.split("/")[1] || "women";

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  return (
    <nav>
      <Container>
        <Gender list={list} />
        <Category list={list} />
      </Container>
    </nav>
  );
};

export default Navigation;
