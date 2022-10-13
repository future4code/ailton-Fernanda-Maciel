import styled from "styled-components";
import pizzalogo from "./img/pizza.jpg";

export const ContainerLi = styled.li`
  border: 1px solid black;
  margin: 5px 5px;
  background-color: #eedd82;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3,
  .card-price {
    text-align: center;
    color: black;
  }

  .card-ingredientes {
    text-align: center;
  }
`;

export const ContainerBotao = styled.div`
  background-color: #ffd700;
  margin: 10px 5px;
  width: 70%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: black;
    background-color: red;
    font-weight: bold;
  }
`;

function PizzaCard(props) {
  const { pizza, addToCart } = props;

  return (
    <ContainerLi>
      <h3>{pizza.name}</h3>
      <img src={pizzalogo} />
      <p className="card-price">
        {pizza.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <p className="card-ingredientes">
        {pizza.ingredients.map((item) => {
          return <span key={item}>{`${item} `}</span>;
        })}
      </p>
      <ContainerBotao onClick={() => addToCart(pizza)}>
        Adicionar no carrinho 🍕
      </ContainerBotao>
    </ContainerLi>
  );
}

export default PizzaCard;
