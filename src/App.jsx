import { BrowserRouter } from "react-router-dom";
import { BackContainer, GlobalStyle } from "./styles/Container";
import { ChangeThemeButton } from "./styles/Button";
import { Header, AppRouter } from "./components";
import { useTheme } from "./use-hook";
import { ThemeIcon } from "./Icon/ThemeIcon";
import useStore from "./store";
function App() {
  const { theme, toggleTheme } = useStore();
  return (
    <>
      <GlobalStyle state={theme} />
      <BrowserRouter>
        <Header state={theme} />

        <BackContainer state={theme}>
          <ChangeThemeButton state={theme} onClick={toggleTheme}>
            {theme === "dark"
              ? ThemeIcon.lightThemeIcon
              : ThemeIcon.darkThemeIcon}
          </ChangeThemeButton>
          <AppRouter />
        </BackContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
