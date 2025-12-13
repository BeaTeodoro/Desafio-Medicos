import S from "./sejaVoluntario.module.scss";

export default function Voluntario() {
  return (
    <main className={S.page}>

      {/* título principal */}
      <section className={S.headerSection}>
        <h1 className={S.title}>Seja Voluntário</h1>
        <p className={S.subtitle}>
          Junte-se a nós e faça a diferença na vida de pessoas que precisam
        </p>
      </section>

      {/* cards de impacto */}
      <section className={S.cardsSection}>
        <div className={S.card}>
          <h3>Impacto Direto</h3>
          <p>Sua dedicação salva vidas e transforma comunidades</p>
        </div>

        <div className={S.card}>
          <h3>Crescimento Pessoal</h3>
          <p>Desenvolva habilidades e cresça profissionalmente</p>
        </div>

        <div className={S.card}>
          <h3>Comunidade</h3>
          <p>Faça parte de uma rede de profissionais comprometidos</p>
        </div>
      </section>

      {/* formulário */}
      <section className={S.formWrapper}>
        <form className={S.form}>

          <h2 className={S.formTitle}>Inscrição para Voluntários</h2>

          <div className={S.groupTitle}>Dados Pessoais</div>

          <div className={S.row}>
            <input type="text" placeholder="Seu Nome *" />
            <input type="email" placeholder="Seu Email *" />
          </div>

          <input type="text" placeholder="Seu Telefone *" className={S.full} />

          <div className={S.groupTitle}>Mensagem Adicional</div>

          <textarea
            placeholder="Conte-nos porque você quer ser voluntário..."
            className={S.textarea}
          />

          <p className={S.infoText}>
            Entraremos em contato para mais informações
          </p>

          <button type="submit" className={S.submitBtn}>
            Enviar Inscrição
          </button>

        </form>
      </section>

    </main>
  );
}
