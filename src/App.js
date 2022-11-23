import Footer from "./common/Footer";
import Header from "./common/Header";
import HomePage from "./common/HomePage";
import { GlobalContainer } from "./styled";

function App() {
  return (
    <GlobalContainer>
      <Header />
      <HomePage />
      <Footer />
    </GlobalContainer>
  );
}

export default App;
