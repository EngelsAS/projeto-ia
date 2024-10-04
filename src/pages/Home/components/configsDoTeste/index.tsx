import { ChangeEvent } from "react";
import SelectInput from "../../../../components/selectInput";
import Titulo from "../../../../components/titulo";
import Section from "../../../../components/section";
import { runChat } from "./config/gemini.ts";

async function runMyRunChat(
  jogo: String = "The Witcher 3",
  specs: String = "Ryzen 5 5600G, RX 550, 16gb ram, ASUS Prime - A520M-E",
  fps: String = "60"
) {
  function parseCustomString(dataString: String) {
    // Substituir chaves simples por chaves duplas e os dois pontos por dois pontos com espaço
    const jsonString = dataString
      .replace(/([a-zA-Z0-9_]+):/g, '"$1":') // Coloca aspas em torno das chaves
      .replace(/'/g, '"'); // Substitui aspas simples por aspas duplas

    // Tentar converter a string JSON em um objeto
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
  const aquiPeloAmo = parseCustomString(response);
  console.log(aquiPeloAmo);
}

const ConfigsDoTeste = () => {
  runMyRunChat();
  return (
    <Section>
      <Titulo>Configuraçoes do Teste</Titulo>
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
          <div>
            <label className="block mb-1 font-semibold">Preset Gráfico</label>
            <SelectInput
              options={[
                { label: "Baixo", value: 1 },
                { label: "Médio", value: 2 },
                { label: "Alto", value: 2 },
                { label: "Ultra", value: 2 },
              ]}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <label className="inline-block mb-1 font-semibold">
              Taxa de frames desejada:
            </label>
            <input
              className="border-b border-zinc-400 max-w-14 outline-none px-2"
              type="text"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
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

          <button className="p-3 font-bold uppercase bg-green-600 w-2/4 text-white rounded-md hover:bg-green-700 transition-all">
            Testar
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ConfigsDoTeste;
