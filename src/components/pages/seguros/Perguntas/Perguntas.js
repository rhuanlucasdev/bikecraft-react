"use client";
import useSimpleAnime from "@/hooks/useSimpleAnime";
import PerguntasList from "./PerguntasList";
import styles from "./perguntas.module.css";

const perguntas = [
  {
    ask: "O que é o seguro de bicicleta da Bikcraft?",
    answer:
      "O seguro de bicicleta da Bikcraft é uma proteção completa para sua bike, cobrindo roubo, furto, danos acidentais e responsabilidade civil. Com ele, você pode pedalar tranquilo, sabendo que sua bicicleta está protegida contra imprevistos.",
  },
  {
    ask: "Quais são as vantagens do seguro de bicicleta da Bikcraft?",
    answer:
      "Além da cobertura abrangente, o seguro de bicicleta da Bikcraft oferece assistência 24 horas, reparo em oficinas parceiras e um processo de sinistro simplificado. Com preços acessíveis e planos flexíveis, é a escolha ideal para proteger seu investimento.",
  },
  {
    ask: "Como faço para contratar o seguro de bicicleta da Bikcraft?",
    answer:
      "Contratar o seguro de bicicleta da Bikcraft é fácil. Basta acessar o site, escolher o plano desejado, preencher o formulário de contratação e concluir o pagamento. Em poucos minutos sua bike já estará protegida.",
  },

  {
    ask: "O seguro cobre roubo e furto em qualquer lugar?",
    answer:
      "Sim. O seguro cobre roubo e furto qualificado em território nacional, desde que a bicicleta esteja em uso ou estacionada em condições adequadas de segurança.",
  },
  {
    ask: "Posso usar o seguro em viagens?",
    answer:
      "Sim, o seguro tem cobertura nacional e pode ser utilizado durante viagens dentro do Brasil, respeitando as condições do contrato.",
  },
  {
    ask: "Existe franquia em caso de sinistro?",
    answer:
      "Sim, dependendo do plano escolhido pode haver aplicação de franquia. Os detalhes são informados claramente no momento da contratação.",
  },
  {
    ask: "O seguro cobre danos na bicicleta em acidentes?",
    answer:
      "Sim. O seguro cobre danos acidentais, como quedas ou colisões, conforme as condições previstas no plano contratado.",
  },
  {
    ask: "Posso cancelar o seguro quando quiser?",
    answer:
      "Sim. O cancelamento pode ser feito a qualquer momento, seguindo as regras de reembolso previstas no contrato.",
  },
  {
    ask: "Como funciona o atendimento em caso de emergência?",
    answer:
      "Você pode acionar o suporte 24h pelo canal de atendimento da Bikcraft. Nossa equipe orienta todo o processo de sinistro e assistência necessária.",
  },
  {
    ask: "O seguro cobre bicicletas elétricas?",
    answer:
      "Sim, temos cobertura específica para bicicletas elétricas, incluindo motor e sistema elétrico, conforme avaliação do modelo.",
  },
];

export default function Perguntas() {
  useSimpleAnime();
  return (
    <article className={`container ${styles["perguntas"]}`}>
      <h2 className="font-1-xxl fadeInUp" data-anime="100">
        perguntas frequentes<span className="cor-p1">.</span>
      </h2>
      <PerguntasList perguntas={perguntas} />
    </article>
  );
}
