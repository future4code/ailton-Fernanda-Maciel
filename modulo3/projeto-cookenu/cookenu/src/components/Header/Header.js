import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  border: 1px solid white;
  padding: 10px;
  background-color: #ffa07a;
  color: white;
  > button {
    :hover {
      background-color: orange;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

function Header() {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };

  const goRecipesListPage = () => {
    navigate("/");
  };
  return (
    <Container>
      <button onClick={goRecipesListPage}>Cookenu</button>

      <button onClick={goLogin}>Login</button>
    </Container>
  );
}
export default Header;
