import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { themeWhite } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <h1>Mini Dogs</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
