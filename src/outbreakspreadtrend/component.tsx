import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { LineChart, Line, Legend, Tooltip, YAxis, XAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

import './style.scss';
import { Daily } from '../utils/classes';
import { IPropsData } from '../utils/interfaces';
import { CustomTooltip } from '../utils/ctooltip';

function SpreadTrend(props: IPropsData) {
    const [t] = useTranslation('common');

    const timeline = JSON.parse(JSON.stringify(props.data.daily)) as Daily[];

    let dtmx = 100;
    timeline.map((d: Daily, i: number) => {
      d.date = format(new Date(d.date), 'MMMM d',{locale: es});
      d.confirmedlog = Math.log2(d.confirmedCumulative);
      d.activelog = Math.log2(d.activeCumulative);
      dtmx = Math.max(dtmx, d.confirmedCumulative);
      return i;
    });

    return (
    <section className="spreadtrend">
      <h4>{ t('trend.title') }</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart syncId="anyId" width={750} height={300} data={timeline} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
          {/* <CartesianGrid stroke="#eee" strokeDasharray="3 3" /> */}
          <XAxis type="category" dataKey="date" stroke="#8899a6"/>
          <YAxis hide={true} type="number" stroke="#8899a6" domain={[0, dtmx + 300]}/>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line name="Confirmados" dataKey="confirmedCumulative" label={{ fill: '#174ea6', fontSize: 20 }} legendType="square" stroke="#174ea6" fill="#174ea6" strokeWidth={2} activeDot={{ r: 4 }} />
          <Line name="Activos" dataKey="activeCumulative" label={{ fill: '#4285f4', fontSize: 20 }} legendType="square"  stroke="#4285f4" fill="#4285f4" strokeWidth={2} activeDot={{ r: 4 }} />
          <Line name="Recuperados" dataKey="recoveredCumulative" label={{ fill: '#8ab4f8', fontSize: 20 }} legendType="square"  stroke="#8ab4f8" fill="#8ab4f8" strokeWidth={2} activeDot={{ r: 4 }} />
          <Line name="Fallecidos" dataKey="deceasedCumulative" label={{ fill: '#36484f', fontSize: 20 }} legendType="square" stroke="#36484f" fill="#36484f" strokeWidth={2} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <h6>{t('trend.log')}</h6>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart syncId="anyId" width={750} height={300} data={timeline} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis type="category" dataKey="date" stroke="#8899a6"/>
          <YAxis hide={true} type="number" stroke="#8899a6" domain={[0, 18]}/>
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Legend />
          <Area name="Activos" dataKey="activelog" label={{ fill: '#4285f4', fontSize: 20 }} legendType="square"  stroke="#4285f4" fill="#4285f4" strokeWidth={2} activeDot={{ r: 4 }} />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}

export default SpreadTrend;
