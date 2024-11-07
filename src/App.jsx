import { BrowserRouter } from "react-router-dom";
import { BackContainer, GlobalStyle } from "./styles/Container";
import { ChangeThemeButton } from "./styles/Button";
import { Header, AppRouter } from "./components";
import { useTheme } from "./use-hook";
function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />

        <BackContainer state={theme}>
          <ChangeThemeButton onClick={toggleTheme}>{theme}</ChangeThemeButton>
          <AppRouter />
        </BackContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
