import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > input,
    select {
      margin-bottom: 20px;
    }

    p > {
      margin: 0;
      padding: 10px 0;
      font-weight: bold;
    }
  }
`;
