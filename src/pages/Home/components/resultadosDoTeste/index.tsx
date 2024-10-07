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
      "1080p": { baixo, medio, alto, ultra },
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
        {/* <article className="border-b border-zinc-400 py-3">
          <Titulo>Melhorias de Hardware Recomendadas Para o Preset Ultra</Titulo>
          <p>
            Para garantir um desempenho mais próximo de 60 FPS no preset ultra, considere as seguintes melhorias:
          </p>
          <ul className="mt-3">
            <li>
              <Titulo>~ Placa de Vídeo (GPU):</Titulo>
              <p>
                A {placaDeVideo} começa a atingir seu limite em gráficos ultra. Para rodar {jogo} em 60 FPS no preset ultra, você poderia considerar o upgrade para uma placa de vídeo mais poderosa do que {placaDeVideo}. Essas placas têm significativamente mais poder de processamento gráfico.
              </p>
            </li>
            <li>
              <Titulo>~ Memória RAM:</Titulo>
              <p>
                Melhorar para 32 GB de RAM pode ser útil, especialmente se você faz multitarefas. Seus {memoriaRam} em dual channel são suficientes para {jogo}, mas se você planeja jogar títulos mais pesados no futuro, o upgrade pode ser benéfico.
              </p>
            </li>
            <li>
              <Titulo>~ Processador (CPU):</Titulo>
              <p>
                O {processador} é eficiente e atual, sem necessidade imediata de upgrade. O foco deve ser na GPU para aumentar os FPS no preset ultra.
              </p>
            </li>
          </ul>
        </article> */}
      </div>
    </Section>
  );
};

export default ResultadosDoTeste;
