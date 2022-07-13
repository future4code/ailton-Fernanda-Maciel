import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 5px;
    padding:5px;
    box-sizing: border-box;

  }
  body {
    background: #192C6B;
    
    font-family: 'Montserrat', sans-serif;
    font:bold;
  }

  h1{
    font-family: 'Carter One', cursive;
    

  }
`;
export default GlobalStyle;
