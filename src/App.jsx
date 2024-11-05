import { BrowserRouter } from "react-router-dom";
import { BackContainer, GlobalStyle } from "./styles/Container";
import { HeaderStyle } from "./styles/Header";
import { Header, AppRouter } from "./components";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />

        <BackContainer>
          <AppRouter />
        </BackContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
