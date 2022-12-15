import styled from "styled-components";

export const ContainerLi = styled.div`
  display: flex;
`;

//botão do remover
export const ContainerBotao = styled.div`
  background-color: #ffd700;
  margin: 10px 5px;
  width: 70%;
  cursor: pointer;
  :hover {
    color: black;
    background-color: red;
    font-weight: bold;
  }
`;

function OrderItemCard(props) {
  const { pizza, removeFromCart } = props;

  return (
    <ContainerLi>
      <p>
        Pizza {pizza.name}-{" "}
        {pizza.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}{" "}
        x {pizza.quantity}
      </p>

      <ContainerBotao onClick={() => removeFromCart(pizza)}>
        Remover item 🍕
      </ContainerBotao>
    </ContainerLi>
  );
}

export default OrderItemCard;
