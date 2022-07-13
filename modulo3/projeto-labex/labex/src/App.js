import React from "react";
import { Router } from "./routes/Router";
import GlobalStyle from "./components/styled/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
