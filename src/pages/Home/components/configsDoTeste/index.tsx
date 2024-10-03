import { ChangeEvent } from "react";
import SelectInput from "../../../../components/selectInput";
import Titulo from "../../../../components/titulo";
import Section from "../../../../components/section";

const ConfigsDoTeste = () => {
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
