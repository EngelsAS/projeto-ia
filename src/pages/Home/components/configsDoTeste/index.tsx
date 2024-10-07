import { Dispatch, SetStateAction, useState } from "react";
import SelectInput from "../../../../components/selectInput";
import Titulo from "../../../../components/titulo";
import Section from "../../../../components/section";
import ResultadosDoTeste from "../resultadosDoTeste/index"; // Importando o componente ResultadosDoTeste
import { runChat } from "./config/gemini.ts";
import { SpecsInterface } from "../../../../@types/specsInterface.ts";

interface IProps {
  especificacoesPersonalizadas: SpecsInterface;
  setEspecificacoesPersonalizadas: Dispatch<SetStateAction<SpecsInterface>>;
}

async function runMyRunChat(
  jogo: string = "The Witcher 3",
  specs: string = "Ryzen 5 5600, RX 570, Ram 16GB",
  fps: string = "3627"
) {
  function parseCustomString(dataString: string) {
    const jsonString = dataString
      .replace(/([a-zA-Z0-9_]+):/g, '"$1":')
      .replace(/'/g, '"');

    try {
      const jsonObject = JSON.parse(jsonString);
      return jsonObject;
    } catch (error) {
      console.error("Erro ao parsear a string:", error);
      return null;
    }
  }

  const formato = `{
    desempenho_estimado: {
      "1080p": {
        baixo: {
          fps_medio: "(mediaDeFPS)",
          percentual_desempenho: "(percentualDesempenho)",
        },
        medio: {
          fps_medio: "(mediaDeFPS)",
          percentual_desempenho: "(percentualDesempenho)",
        },
        alto: {
          fps_medio: "(mediaDeFPS)",
          percentual_desempenho: "(percentualDesempenho)",
        },
        ultra: {
          fps_medio: "(mediaDeFPS)",
          percentual_desempenho: "(percentualDesempenho)",
        },
      },
    },
  }`;

  const prompt = `Com o jogo: ${jogo}, e o PC com as especificações: ${specs} quero saber qual a porcentagem de chance de rodar o jogo numa faixa de ${fps}FPS, quero que me responda nesse formato: ${formato}, não quero nada adicional, apenas isso, nada mais, nada mesmo, não precisa colocar as aspas e nem o nome json tbm`;

  const response = await runChat(prompt);
  const resultado = parseCustomString(response);

  return resultado; // Retorna o resultado para ser utilizado no componente
}

const ConfigsDoTeste = ({
  especificacoesPersonalizadas,
  setEspecificacoesPersonalizadas,
}: IProps) => {
  const [resultado, setResultado] = useState(null); // Adicionando o estado resultado
  const [isLoading, setIsLoading] = useState(false); // Estado para gerenciar o loading

  // Função para lidar com a execução do teste ao clicar no botão
  const handleTestar = async () => {
    setIsLoading(true);
    try {
      const resultadoApi = await runMyRunChat(
        especificacoesPersonalizadas.jogo,
        `${especificacoesPersonalizadas.placaDeVideo}, ${especificacoesPersonalizadas.processador}, ${especificacoesPersonalizadas.memoriaRam}`,
        "3627"
      );
      setResultado(resultadoApi); // Armazena o resultado da API no estado

      console.log(resultadoApi);
    } catch (error) {
      console.error("Erro ao executar o teste:", error);
    } finally {
      setIsLoading(false); // Finaliza o loading
    }
  };

  return (
    <Section>
      <Titulo>Configurações do Teste</Titulo>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-3">
          <div>
            <label className="block mb-1 font-semibold">
              Especificações do teste
            </label>
            <SelectInput
              options={[
                { label: "Especificações da Máquina", value: 1 },
                { label: "Especificações Personalizadas", value: 2 },
              ]}
            />
          </div>
          {/* <div>
            <label className="block mb-1 font-semibold">Preset Gráfico</label>
            <SelectInput
              options={[
                { label: "Baixo", value: 1 },
                { label: "Médio", value: 2 },
                { label: "Alto", value: 3 },
                { label: "Ultra", value: 4 },
              ]}
            />
          </div> */}

          <div className="flex flex-col items-start justify-between gap-4 mb-1">
            <label className="block font-semibold">Jogo:</label>
            <input
              value={especificacoesPersonalizadas.jogo}
              onChange={(e) =>
                setEspecificacoesPersonalizadas((prev) => ({
                  ...prev,
                  jogo: e.target.value,
                }))
              }
              className="border border-zinc-400 rounded-md w-full outline-none pl-2 py-1"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div>
            <label className="block mb-1 font-semibold">
              Tipo da Aplicação
            </label>
            <SelectInput
              options={[
                { label: "Jogo de Computador", value: 1 },
                { label: "Software de Produtividade", value: 2 },
              ]}
            />
          </div>

          <button
            onClick={handleTestar} // Chamada da função ao clicar no botão
            className="p-3 font-bold uppercase bg-green-600 w-2/4 text-white rounded-md hover:bg-green-700 transition-all"
          >
            {isLoading ? "Testando..." : "Testar"}{" "}
            {/* Texto do botão dinâmico */}
          </button>
        </div>
      </div>

      {/* Renderiza o componente ResultadosDoTeste e passa o resultado da API como props */}
      {resultado && (
        <ResultadosDoTeste
          resultado={resultado}
          jogo={especificacoesPersonalizadas.jogo} // Passando o nome do jogo
        />
      )}
    </Section>
  );
};

export default ConfigsDoTeste;
