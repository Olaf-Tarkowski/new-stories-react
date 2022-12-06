import ContactForm from "./common/ContactForm";
import Footer from "./common/Footer";
import Header from "./common/Header";
import HomePage from "./common/HomePage";
import { GlobalContainer } from "./styled";

function App() {
  return (
    <GlobalContainer>
      <Header />
      <HomePage />
      <ContactForm />
      <Footer />
    </GlobalContainer>
  );
}

export default App;
