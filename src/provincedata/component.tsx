import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import groupby from 'lodash.groupby';

import './style.scss';
import { Province } from '../utils/classes';
import { IPropsData } from '../utils/interfaces';

function ProvinceData(props: IPropsData) {
    const [t] = useTranslation('common');
    const provinces = JSON.parse(JSON.stringify(props.data.provinces))
      .filter((o: Province) => format(new Date(o.date), 'M/d/yy') === format(new Date(props.data.updated[0].updated), 'M/d/yy'))
      .sort((a: Province, b: Province) => {
        const provinceA = +a.confirmedCumulative;
        const provinceB = +b.confirmedCumulative;
        let comparison = 0;
        if (provinceA > provinceB) {
          comparison = -1;
        } else if (provinceA < provinceB) {
          comparison = 1;
        }
        return comparison;
      }) as Province[];
    const provincesDaily = groupby(JSON.parse(JSON.stringify(props.data.provinces)) as Province[], 'province');
    const shouldHide = (n: number) => {
      return +n > 0;
    };

    const listProvinces = provinces.map((p, i) =>
      <tr key={p.province}>
        <td className="provinces" data-label={t('province.name')}>{p.province}</td>
        <td className="trend pr">
          <ResponsiveContainer width="100%" height={30} >
            <BarChart width={250} height={30} data={provincesDaily[p.province]}>
              <XAxis dataKey="date" hide={true} />
              <YAxis hide={true} type="number" domain={[0, 'dataMax + 300']}/>
              <Bar dataKey="confirmed" fill="#174ea6" stroke="#174ea6" />
            </BarChart>
          </ResponsiveContainer>
        </td>
  <td className="count countd" data-label={t('general.confirmed')}>{p.confirmedCumulative} {shouldHide(p.confirmed) && <span className="increment">(+{p.confirmed})</span>}</td>
  <td className="count countd" data-label={t('general.active')}>{p.activeCumulative} {shouldHide(p.active) && <span className="incrementa">(+{p.active})</span>}</td>
  <td className="count countd" data-label={t('general.recovered')}>{p.recoveredCumulative} {shouldHide(p.recovered) && <span className="incrementr">(+{p.recovered})</span>}</td>
  <td className="count countd" data-label={t('general.deceased')}>{p.deceasedCumulative} {shouldHide(p.deceased) && <span className="incrementd">(+{p.deceased})</span>}</td>
      </tr>
    );

    const ctotal = provinces.reduce((p, c) => p +(+c.confirmedCumulative), 0);
    const atotal = provinces.reduce((p, c) => p +(+c.activeCumulative), 0);
    const rtotal = provinces.reduce((p, c) => p +(+c.recoveredCumulative), 0);
    const dtotal = provinces.reduce((p, c) => p +(+c.deceasedCumulative), 0);

    return (
    <section className="empv">
      <h4>{ t('province.title') }</h4>
      <table id="provinces-table">
        <thead>
          <tr>
            <th className="provinces-table-th provinces">{t('province.name')}</th>
            <th className="provinces-table-th trend"><div className="sparkline-chart"></div></th>
            <th className="provinces-table-th count">{t('general.confirmed')}</th>
            <th className="provinces-table-th count">{t('general.active')}</th>
            <th className="provinces-table-th count">{t('general.recovered')}</th>
            <th className="provinces-table-th count">{t('general.deceased')}</th>
          </tr>
        </thead>
        <tbody id="provinces-rows">
          {listProvinces}
        </tbody>
        <tfoot>
          <tr className="totals">
            <td>Total</td>
            <td className="trend"></td>
            <td className="count countd" data-label={`Total ${t('general.confirmed')}`}>{ ctotal }</td>
            <td className="count countd" data-label={`Total ${t('general.active')}`}>{ atotal }</td>
            <td className="count countd" data-label={`Total ${t('general.recovered')}`}>{ rtotal }</td>
            <td className="count countd"data-label={`Total ${t('general.deceased')}`}>{ dtotal }</td> 
          </tr>
        </tfoot>
      </table>
    </section>
  );
}


export default ProvinceData;
