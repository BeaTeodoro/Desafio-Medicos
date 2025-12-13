import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import * as S from "./header.module.scss";

/* Header com menu responsivo (hamburguer no mobile) */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={S.header}>
        {/* box do logo */}
        <div className={S.boxLogo}>
          <img src={Logo} alt="logo do site, coração verde" className={S.logo} />
          <Link to="/" className={S.brandLink}>
            Médicos & Dentistas
          </Link>
        </div>

        {/* nav desktop */}
        <nav className={S.nav}>
          <Link to="/" className={S.navLink}>
            Home
          </Link>
          <Link to="/voluntario" className={S.navLinkPrimary}>
            Seja Voluntário
          </Link>
        </nav>

        {/* botão hamburguer (mobile) */}
        <button
          className={S.hamburger}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span className={open ? S.barTopActive : S.barTop} />
          <span className={open ? S.barMidActive : S.barMid} />
          <span className={open ? S.barBotActive : S.barBot} />
        </button>
      </header>

      {/* menu mobile (aparece no fluxo, sem position) */}
      {open && (
        <div className={S.mobileMenu}>
          <Link to="/" className={S.mobileLink} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            to="/voluntario"
            className={S.mobileLinkPrimary}
            onClick={() => setOpen(false)}
          >
            Seja Voluntário
          </Link>
        </div>
      )}
    </>
  );
}
