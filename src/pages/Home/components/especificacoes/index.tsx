import { useState } from "react";

const initEspecs = {
  placaDeVideo: "RX 570",
  processador: "Ryzen 5 5600",
  memoriaRam: "16 GB (dual channel)",
  placaMae: "ASUS Prime - A520M-E",
};

const Especificacoes = () => {
  const [especificacoesPersonalizadas, setEspecificacoesPersonalizadas] =
    useState(initEspecs);

  const handleInputChange = (chave: string, valor: string) => {
    setEspecificacoesPersonalizadas((prev) => ({
      ...prev,
      [chave]: valor,
    }));
  };

  return (
    <section className="pt-3 flex justify-between">
      <div className="border-r-2 border-b-2 border-zinc-400 grow pb-2 flex flex-col gap-3">
        <h1 className="font-bold text-xl mb-2">Especificações da Máquina:</h1>
        <div className="flex">
          <p>Placa de video:</p>
          <input
            value="--"
            disabled
            onChange={(e) => handleInputChange("placaDeVideo", e.target.value)}
            className="border border-zinc-400 rounded-md ml-1 outline-none px-2  disabled:bg-slate-300"
          />
        </div>
        <div className="flex">
          <p>Processador:</p>
          <input
            value="--"
            disabled
            onChange={(e) => handleInputChange("processador", e.target.value)}
            className="border border-zinc-400 rounded-md ml-1 outline-none px-2 disabled:bg-slate-300"
          />
        </div>
        <div className="flex">
          <p>Memória RAM:</p>
          <input
            value="--"
            disabled
            onChange={(e) => handleInputChange("memoriaRam", e.target.value)}
            className="border border-zinc-400 rounded-md ml-1 outline-none px-2 disabled:bg-slate-300"
          />
        </div>
        <div className="flex">
          <p>Placa Mãe:</p>
          <input
            value="--"
            disabled
            onChange={(e) => handleInputChange("placaMae", e.target.value)}
            className="border border-zinc-400 rounded-md ml-1 outline-none px-2 disabled:bg-slate-300"
          />
        </div>
      </div>
      <div className="grow border-b-2 border-zinc-400 flex flex-col items-end pb-2 gap-3">
        <h1 className="font-bold text-xl mb-2">
          Especificações Personalizadas:
        </h1>
        <div className="flex">
          <p>Placa de video:</p>
          <input
            value={especificacoesPersonalizadas.placaDeVideo}
            onChange={(e) => handleInputChange("placaDeVideo", e.target.value)}
            className="border border-zinc-400 rounded-md ml-1 outline-none px-2"
          />
        </div>
        <div className="flex">
          <p>Processador:</p>
          <input
            value={especificacoesPersonalizadas.processador}
            onChange={(e) => handleInputChange("processador", e.target.value)}
            className="border border-zinc-400 rounded-md ml-1 outline-none px-2"
          />
        </div>
        <div className="flex">
          <p>Memória RAM:</p>
          <input
            value={especificacoesPersonalizadas.memoriaRam}
            onChange={(e) => handleInputChange("memoriaRam", e.target.value)}
            className="border border-zinc-400 rounded-md ml-1 outline-none px-2"
          />
        </div>
        <div className="flex">
          <p>Placa Mãe:</p>
          <input
            value={especificacoesPersonalizadas.placaMae}
            onChange={(e) => handleInputChange("placaMae", e.target.value)}
            className="border border-zinc-400 rounded-md ml-1 outline-none px-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Especificacoes;
