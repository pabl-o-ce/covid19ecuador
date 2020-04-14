import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

function Info() {
    const [t] = useTranslation('common');

    return (
    <section className="info">
      <h4>{ t('info.title') }</h4>
      <ul>
        <li><a href="https://youtu.be/qJlP91xjvsQ" rel="noopener noreferrer" target="_blank">{t('info.hgn-1')}</a></li>
        <li><a href="https://www.prnewswire.com/news-releases/inovio-initiates-phase-1-clinical-trial-of-its-covid-19-vaccine-and-plans-first-dose-today-301035633.html" rel="noopener noreferrer" target="_blank">{t('info.hgn-2')}</a></li>
        <li><a href="https://www.bosch.com/stories/vivalytic-rapid-test-for-covid-19/" rel="noopener noreferrer" target="_blank">{t('info.hgn-3')}</a></li>
        <li><a href="https://e-vent.mit.edu/" rel="noopener noreferrer" target="_blank">{t('info.hgn-4')}</a></li>
      </ul>
      <h4>{ t('info.title2') }</h4>
      <ul>
        <li><a href="https://coronavirusecuador.com/" rel="noopener noreferrer" target="_blank">{t('info.hi-1')}</a></li>
        <li><a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public" rel="noopener noreferrer" target="_blank">{t('info.hi-2')}</a></li>
        <li><a href="https://api.whatsapp.com/send?phone=593998551331&text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20esta%20solucion." rel="noopener noreferrer" target="_blank">{t('info.hi-3')}</a></li>
      </ul>
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
