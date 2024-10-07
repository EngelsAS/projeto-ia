import Section from "../../../../components/section";
import Titulo from "../../../../components/titulo";

interface PresetPerformance {
  fps_medio: string;
  percentual_desempenho: string;
}

interface ResultadosDoTesteProps {
  resultado: {
    desempenho_estimado: {
      "1080p": {
        baixo: PresetPerformance;
        medio: PresetPerformance;
        alto: PresetPerformance;
        ultra: PresetPerformance;
        dicasDeMelhoriaDeHardware: string;
      };
    };
  };
  jogo: string;
}

const ResultadosDoTeste: React.FC<ResultadosDoTesteProps> = ({
  resultado,
  jogo,
}) => {
  if (!resultado) {
    return null;
  }

  const {
    desempenho_estimado: {
      "1080p": { baixo, medio, alto, ultra, dicasDeMelhoriaDeHardware },
    },
  } = resultado;

  return (
    <Section>
      <Titulo>Resultados do Teste para {jogo}</Titulo> {/* Atualiza o título */}
      <div className="w-full border border-zinc-400 p-3">
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Preset Baixo: {baixo.fps_medio} FPS</Titulo>
          <p>
            No preset baixo, o desempenho é excelente. Você obterá entre{" "}
            {baixo.fps_medio} FPS de forma estável, sem precisar de ajustes no
            hardware.
          </p>
        </article>
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Preset Médio: {medio.fps_medio} FPS</Titulo>
          <p>
            No preset médio, o jogo rodará próximo a {medio.fps_medio} FPS.
            Aqui, não há necessidade de mudanças no hardware, já que o
            desempenho é mais que satisfatório.
          </p>
        </article>
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Preset Alto: {alto.fps_medio} FPS</Titulo>
          <p>
            No preset alto, você verá uma queda para a faixa de {alto.fps_medio}{" "}
            FPS. O jogo ainda é jogável, mas começa a exigir mais da GPU. Se o
            foco for rodar o jogo em alto com maior estabilidade, uma placa de
            vídeo mais forte ajudaria a manter os FPS mais altos e estáveis.
          </p>
        </article>
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Preset Ultra: {ultra.fps_medio} FPS</Titulo>
          <p>
            No preset ultra, o jogo fica entre {ultra.fps_medio} FPS, o que
            começa a afetar a fluidez do gameplay, especialmente em áreas
            complexas. Aqui, você precisaria melhorar o hardware para garantir
            um desempenho mais próximo de 60 FPS.
          </p>
        </article>
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Dicas de Melhoria</Titulo>
          <p>{dicasDeMelhoriaDeHardware}</p>
        </article>
      </div>
    </Section>
  );
};

export default ResultadosDoTeste;
