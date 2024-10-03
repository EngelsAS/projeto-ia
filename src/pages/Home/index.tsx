import Container from "../../components/container";
import ConfigsDoTeste from "./components/configsDoTeste";
import Especificacoes from "./components/especificacoes";
import ResultadosDoTeste from "./components/resultadosDoTeste";

const Home = () => {
  return (
    <main className="w-full">
      <Container>
        <Especificacoes />
        <ConfigsDoTeste />
        <ResultadosDoTeste />
      </Container>
    </main>
  );
};

export default Home;
