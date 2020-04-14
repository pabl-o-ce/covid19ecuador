import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

function Footer() {
    const [t] = useTranslation('common');

    return (
    <section className="footer">
      <p>
        {t("footer.p1")} <a href="https://twitter.com/pablocarreraest" target="_blank" rel="noopener noreferrer">Pablo Carrera Estrada</a> (<a href="https://carreraestrada.com" target="_blank" rel="noopener noreferrer">Carrera Estrada & Sistemas</a>).<br />
        <a href="https://www.paypal.me/pcarrerae" target="_blank" rel="noopener noreferrer">{t("footer.p2")}</a>.
      </p>
      <p>
        {t("footer.p3")} <a href="https://github.com/pablocarreraest/covid19ecuador" target="_blank" rel="noopener noreferrer">{t("footer.p4")}</a>.
      </p>
    </section>
  );
}


export default Footer;
