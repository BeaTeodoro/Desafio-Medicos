import Logo from "../../assets/logo.png";
import * as S from "./footer.module.scss";

// Ícones — SVG inline para manter cor e tamanho perfeitos
const IconMail = () => (
  <svg className={S.icon} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 0l8 7 8-7"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const IconPhone = () => (
  <svg className={S.icon} viewBox="0 0 24 24" fill="none">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.4 12.4 0 0 0 .7 2.73 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.16a2 2 0 0 1 2.11-.45 12.4 12.4 0 0 0 2.73.7A2 2 0 0 1 22 16.92z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const IconLocation = () => (
  <svg className={S.icon} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const IconFacebook = () => (
  <svg className={S.socialSvg} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9a3.5 3.5 0 0 1 3.8-3.8c1.1 0 2.3.2 2.3.2v2.5H15c-1.4 0-1.9.9-1.9 1.8v2.2H17l-.5 3h-3.4v7A10 10 0 0 0 22 12z" />
  </svg>
);

const IconInsta = () => (
  <svg className={S.socialSvg} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1 1 12 16a4.5 4.5 0 0 1 0-9zm6.5-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
  </svg>
);

const IconLinkedin = () => (
  <svg className={S.socialSvg} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 9H3v12h3V9zm-.5-6A1.8 1.8 0 1 0 6 4.5 1.8 1.8 0 0 0 5.5 3zM21 21h-3v-5.6c0-3.4-4-3.2-4 0V21h-3V9h3v2c1.4-2.6 7-2.8 7 2.5V21z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={S.footer}>
      <div className={S.top}>

        {/* COLUNA 1 - Marca */}
        <div className={S.col}>
          <div className={S.brand}>
            <img src={Logo} alt="logo" className={S.logo} />
            <span className={S.brandTitle}>Médicos & Dentistas</span>
          </div>

          <p className={S.desc}>
            Saúde e cuidado sem barreiras para toda comunidade.
          </p>
        </div>

        {/* COLUNA 2 - Contato */}
        <div className={S.col}>
          <h3 className={S.heading}>Contato</h3>

          <ul className={S.contactList}>
            <li>
              <IconPhone />
              <span>(11) 9000-0000</span>
            </li>

            <li>
              <IconLocation />
              <span>São Paulo, Brasil</span>
            </li>

            <li>
              <IconMail />
              <a href="mailto:contato@medico-dentista.org">
                contato@medico-dentista.org
              </a>
            </li>
          </ul>
        </div>

        {/* COLUNA 3 - Redes Sociais */}
        <div className={S.col}>
          <h3 className={S.heading}>Redes Sociais</h3>

          <div className={S.socialIcons}>
            <div className={S.socialItem}><IconFacebook /></div>
            <div className={S.socialItem}><IconInsta /></div>
            <div className={S.socialItem}><IconLinkedin /></div>
          </div>
        </div>
      </div>

      <div className={S.bottom}>
        © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.
      </div>
    </footer>
  );
}
