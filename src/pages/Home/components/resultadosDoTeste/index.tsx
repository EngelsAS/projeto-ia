import Section from "../../../../components/section";
import Titulo from "../../../../components/titulo";

const ResultadosDoTeste = () => {
  return (
    <Section>
      <Titulo>Resultados do Teste</Titulo>

      <div className="w-full border border-zinc-400 p-3">
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Preset Baixo: 60-70 FPS</Titulo>
          <p>
            No preset baixo, o desempenho é excelente. Você obterá entre 60 e 70
            FPS de forma estável, sem precisar de ajustes no hardware.
          </p>
        </article>
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Preset Médio: 55-60 FPS</Titulo>
          <p>
            No preset médio, o jogo rodará próximo a 60 FPS. Aqui, não há
            necessidade de mudanças no hardware, já que o desempenho é mais que
            satisfatório.
          </p>
        </article>
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Preset Alto: 45-55 FPS</Titulo>
          <p>
            No preset alto, você verá uma queda para a faixa de 45 a 55 FPS. O
            jogo ainda é jogável, mas começa a exigir mais da GPU. Se o foco for
            rodar o jogo em alto com maior estabilidade, uma placa de vídeo mais
            forte ajudaria a manter os FPS mais altos e estáveis.
          </p>
        </article>
        <article className="border-b border-zinc-400 py-3">
          <Titulo>Preset Ultra: 35-45 FPS</Titulo>
          <p>
            No preset ultra, o jogo fica entre 35 e 45 FPS, o que começa a
            afetar a fluidez do gameplay, especialmente em áreas complexas.
            Aqui, você precisaria melhorar o hardware para garantir um
            desempenho mais próximo de 60 FPS.
          </p>
        </article>
        <article className="border-b border-zinc-400 py-3">
          <Titulo>
            Melhorias de Hardware Recomendadas Para o Preset Ultra
          </Titulo>
          <p>
            No preset ultra, o jogo fica entre 35 e 45 FPS, o que começa a
            afetar a fluidez do gameplay, especialmente em áreas complexas.
            Aqui, você precisaria melhorar o hardware para garantir um
            desempenho mais próximo de 60 FPS.
          </p>

          <ul className="mt-3">
            <li>
              <Titulo>~ Placa de Vídeo (GPU):</Titulo>
              <p>
                A RX 570 começa a atingir seu limite em gráficos ultra. Para
                rodar The Witcher 3 em 60 FPS no preset ultra, você poderia
                considerar o upgrade para uma RX 6600 XT, RTX 3060, ou até uma
                RTX 2060. Essas placas têm significativamente mais poder de
                processamento gráfico, suportam melhor as texturas, sombras e
                efeitos pesados que o preset ultra exige.
              </p>
            </li>
            <li>
              <Titulo>~ Memória RAM:</Titulo>
              <p>
                Melhoria recomendada: Aumentar para 32 GB de RAM (não é
                essencial, mas ajuda em multitarefas e em jogos mais modernos).
                Seus 16 GB de RAM em dual channel são mais do que suficientes
                para The Witcher 3. No entanto, se você planeja jogar jogos mais
                pesados ou com gráficos mais modernos no futuro, aumentar para
                32 GB pode garantir mais fluidez, especialmente se você faz
                outras atividades ao mesmo tempo, como streaming ou edição de
                vídeo.
              </p>
            </li>
            <li>
              <Titulo>~ Processador (CPU):</Titulo>
              <p>
                Melhoria recomendada: Nenhuma imediata necessária. O Ryzen 5
                5600 é um processador muito eficiente e atual. Ele não está
                sendo o gargalo nesse cenário. Uma melhoria na GPU será o fator
                decisivo para conseguir mais FPS no preset ultra. O Ryzen 5 5600
                é excelente para lidar com as demandas de jogos como The Witcher
                3, então não há necessidade urgente de upgrade aqui.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </Section>
  );
};

export default ResultadosDoTeste;
