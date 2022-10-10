import styled from "styled-components";
import OrderItemCard from "../components/OrderItemCard";
import pizza3 from "./img/pizza3.jpg";

export const ContainerSection = styled.section`
  width: 30em;
  border: 1px solid black;
  margin: 5px;
  background-color: #eedd82;

  h1 {
    font-size: 1.5em;
    text-align: center;
  }
`;

export const ContainerBotao = styled.div`
  background-color: #ffd700;
  margin: 10px 5px;
  width: 70%;
  text-align: center;

  cursor: pointer;
  :hover {
    color: black;
    background-color: red;
    font-weight: bold;
  }
`;

function OrderSummary(props) {
  const { cart, removeFromCart, total, confirmOrder } = props;

  return (
    <ContainerSection>
      <h1>Resumo do pedido</h1>

      {cart.map((pizza) => {
        return (
          <OrderItemCard
            key={pizza.name}
            pizza={pizza}
            removeFromCart={removeFromCart}
          />
        );
      })}

      <h2>
        Total:{" "}
        {total.toLocaleString("pt-br", { style: "currency", currency: "USD" })}
      </h2>
      <img src={pizza3} alt={"pizza2"} />
      <ContainerBotao onClick={confirmOrder}>
        Confirmar pedido 🍕
      </ContainerBotao>
    </ContainerSection>
  );
}

export default OrderSummary;
