import React , {useState} from "react";
import { ThemeProvider } from "styled-components";
import { softModeTheme, darkModeTheme } from "./Components/UI/themes";
import BankHeader from "./Components/BankHeader";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTheme } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme((theme) => !theme); 
  };

  return (
      <ThemeProvider theme={theme ? softModeTheme : darkModeTheme}>
        <GlobalStyle />
        <BtnTheme onClick={toggleTheme}>
          <SwitcherTheme theme={theme}/>
        </BtnTheme>
        <BankHeader />
        <Container />
      </ThemeProvider>
  );
}

export default App;
