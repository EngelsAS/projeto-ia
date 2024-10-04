import { useState } from "react";
import Container from "../../components/container";
import ConfigsDoTeste from "./components/configsDoTeste";
import Especificacoes from "./components/especificacoes";
import ResultadosDoTeste from "./components/resultadosDoTeste";

const initEspecs = {
  placaDeVideo: "RX 570",
  processador: "Ryzen 5 5600",
  memoriaRam: "16 GB (dual channel)",
  placaMae: "ASUS Prime - A520M-E",
  jogo: "The Witcher 3",
};

const Home = () => {
  const [especificacoesPersonalizadas, setEspecificacoesPersonalizadas] =
    useState(initEspecs);

  return (
    <main className="w-full">
      <Container>
        <Especificacoes
          especificacoesPersonalizadas={especificacoesPersonalizadas}
          setEspecificacoesPersonalizadas={setEspecificacoesPersonalizadas}
        />
        <ConfigsDoTeste
          especificacoesPersonalizadas={especificacoesPersonalizadas}
          setEspecificacoesPersonalizadas={setEspecificacoesPersonalizadas}
        />
        <ResultadosDoTeste />
      </Container>
    </main>
  );
};

export default Home;
