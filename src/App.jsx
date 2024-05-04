import HomeBar from "./pages/HomeBar";
import AboutMe from "./pages/AboutMe";
import ContactForm from "./pages/ContactForm";
import Portfolio from "./pages/Portfolio";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <HomeBar />
      <AboutMe />
      <Portfolio />
      <ContactForm />
    </ChakraProvider>
  );
}

export default App;
