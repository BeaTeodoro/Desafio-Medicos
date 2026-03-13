import { useState } from "react";
import * as S from "./sejaVoluntario.module.scss";

export default function Voluntario() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function enviarFormulario(e) {
    e.preventDefault();

    const dados = {
      nome,
      email,
      telefone,
      mensagem
    };

    try {
      const resposta = await fetch("https://api-voluntarios.onrender.com/cadastros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        alert(resultado.erro);
        return;
      }

      alert("Inscrição enviada com sucesso!");

      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");

    } catch (erro) {
      console.error(erro);
      alert("Erro ao conectar com o servidor.");
    }
  }

  return (
    <main className={S.page}>

      {/* título principal */}
      <section className={S.headerSection}>
        <h1 className={S.title}>Seja Voluntário</h1>
        <p className={S.subtitle}>
          Junte-se a nós e faça a diferença na vida de pessoas que precisam
        </p>
      </section>

      {/* cards */}
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
        <form className={S.form} onSubmit={enviarFormulario}>

          <h2 className={S.formTitle}>Inscrição para Voluntários</h2>

          <div className={S.groupTitle}>Dados Pessoais</div>

          <div className={S.row}>

            <input
              type="text"
              placeholder="Seu Nome *"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              type="email"
              placeholder="Seu Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <input
            type="text"
            placeholder="Seu Telefone *"
            className={S.full}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <div className={S.groupTitle}>Mensagem Adicional</div>

          <textarea
            placeholder="Conte-nos porque você quer ser voluntário..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
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