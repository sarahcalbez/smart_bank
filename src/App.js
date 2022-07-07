import React from "react";

import BankHeader from "./Components/BankHeader";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BankHeader />
      <Container />
    </>
  );
}

export default App;
