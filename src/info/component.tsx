import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

function Info() {
    const [t] = useTranslation('common');

    return (
    <section className="info">
      <h4>{ t('info.title3') }</h4>
      <ul>
        <li><a href="https://www.gestionderiesgos.gob.ec/informes-de-situacion-covid-19-desde-el-13-de-marzo-del-2020/" rel="noopener noreferrer" target="_blank">{t('info.pds-1')}</a></li>
        <li><a href="https://www.worldometers.info/coronavirus/" rel="noopener noreferrer" target="_blank">{t('info.pds-2')}</a></li>
        <li><a href="https://systems.jhu.edu/research/public-health/ncov/" rel="noopener noreferrer" target="_blank">{t('info.pds-3')}</a></li>
      </ul>
    </section>
  );
}


export default Info;
