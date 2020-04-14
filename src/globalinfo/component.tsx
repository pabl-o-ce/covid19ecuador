import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

import './style.scss';
import { Daily } from '../utils/classes';
import { IPropsData } from '../utils/interfaces';

function GlobalInfo(props: IPropsData) {
    const [t] = useTranslation('common');
    const global = {...props.data.daily} as Daily[];
    let current = {...props.data.daily.find(o => o.date === format(new Date(props.data.updated), 'M/d/yy'))} as Daily;

    return (
    <section className="global">
        <div className="global-confirmed">
            <div className="diff">( +{current.confirmed} )</div>
            <div className="value">{current.confirmedCumulative}</div>
            <div className="label">{t('general.confirmed')}</div>
        </div>
        <div className="global-recovered">
            <div className="diff">( +{current.recovered} )</div>
            <div className="value">{current.recoveredCumulative}</div>
            <div className="label">{t('general.recovered')}</div>
        </div>
        <div className="global-deceased">
            <div className="diff">( +{current.deceased} )</div>
            <div className="value">{current.deceasedCumulative}</div>
            <div className="label">{t('general.deceased')}</div>
        </div>
        <div className="global-active">
            <div className="diff">( +{current.active} )</div>
            <div className="value">{current.activeCumulative}</div>
            <div className="label">{t('general.active')}</div>
        </div>
        <div className="global-critical">
            <div className="diff">( +{current.critical} )</div>
            <div className="value">{current.criticalCumulative}</div>
            <div className="label">{t('general.critical')}</div>
        </div>
        <div className="global-tested">
            <div className="diff">( +{current.suspect} )</div>
            <div className="value">{current.suspectCumulative}</div>
            <div className="label">{t('general.suspect')}</div>
        </div>
        <div className="global-tested">
            <div className="diff">( +{current.tested} )</div>
            <div className="value">{current.testedCumulative}</div>
            <div className="label">{t('general.tested')}</div>
        </div>
        <div className="global-deceased">
            <div className="diff">( % )</div>
            <div className="value">{current.mortality}</div>
            <div className="label">{t('general.mortality')}</div>
        </div>
        <div className="global-recovered">
            <div className="diff">( % )</div>
            <div className="value">{current.recover}</div>
            <div className="label">{t('general.recovered')}</div>
        </div>
    </section>
  );
}


export default GlobalInfo;
