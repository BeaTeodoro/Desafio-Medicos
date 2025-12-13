import { Link } from "react-router-dom";
import Medico from "../../assets/medico.png";
import Saude from "../../assets/saude.png";
import * as S from "./home.module.scss";

/* Cards da seção Nossa Missão */
const missionCards = [
  {
    title: "Acesso Equitativo",
    text:
      "Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.",
  },
  {
    title: "Comunidade Forte",
    text:
      "Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.",
  },
  {
    title: "Bem-estar Total",
    text:
      "Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.",
  },
];

/* Cards da seção Nosso Impacto */
const impactCards = [
  { title: "2,500+", subtitle: "Pessoas Atendidas" },
  { title: "150+", subtitle: "Profissionais Voluntários" },
  { title: "98%", subtitle: "Satisfação dos Pacientes" },
  { title: "5+", subtitle: "Anos de Dedicação" },
];

export default function Home() {
  return (
    <main className={S.page}>
      {/* seção hero */}
      <section className={S.hero}>
        <div className={S.container}>
          <div className={S.heroRow}>
            {/* coluna esquerda */}
            <div className={S.heroLeft}>
              <img
                src={Saude}
                alt="Saúde para todos"
                className={S.badgeImg}
              />

              <h1 className={S.title}>Saúde e cuidado sem barreiras</h1>

              <p className={S.lead}>
                Um projeto dedicado a oferecer atendimento médico e odontológico
                gratuito para pessoas que mais precisam em nossa comunidade.
              </p>

              {/* botões */}
              <div className={S.actions}>
                <Link to="/voluntario" className={S.ctaPrimary}>
                  Seja Voluntário
                </Link>

                <a href="#como-ajudar" className={S.ctaOutline}>
                  Como Ajudar
                </a>
              </div>
            </div>

            {/* coluna direita */}
            <div className={S.heroRight}>
              <img
                src={Medico}
                alt="Médico voluntário"
                className={S.medicoImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* seção nossa missão */}
      <section className={S.missao}>
        <div className={S.container}>
          <h2 className={S.sectionTitle}>Nossa Missão</h2>

          <p className={S.sectionLead}>
            Transformar vidas através do acesso universal à saúde de qualidade
          </p>

          <div className={S.missaoCards}>
            {missionCards.map((c) => (
              <article key={c.title} className={S.missaoCard}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* seção nosso impacto */}
      <section className={S.impacto}>
        <div className={S.container}>
          <h2 className={S.sectionTitleDark}>Nosso Impacto</h2>

          <p className={S.sectionLeadDark}>
            Transformando a saúde de nossa comunidade, um paciente de cada vez
          </p>

          <div className={S.impactCards}>
            {impactCards.map((c) => (
              <div key={c.title} className={S.impactCard}>
                <h3 className={S.impactNumber}>{c.title}</h3>
                <p>{c.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* âncora do botão Como Ajudar */}
      <div id="como-ajudar" />
    </main>
  );
}
