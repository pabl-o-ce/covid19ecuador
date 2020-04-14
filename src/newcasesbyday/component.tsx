import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { BarChart, Bar, Tooltip, YAxis, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

import './style.scss';
import { Daily } from '../utils/classes';
import { IPropsData } from '../utils/interfaces';
import { CustomTooltip } from '../utils/ctooltip';

function NewCases(props: IPropsData) {
    const [t] = useTranslation('common');
    const timeline = JSON.parse(JSON.stringify(props.data.daily)) as Daily[];
    let dtmx = 100;
    timeline.map((i: any) => {
      i.date = format(new Date(i.date), 'MMMM d',{locale: es});
      dtmx = Math.max(dtmx, i.confirmed);
      return i;
    });

    return (
    <section className="newcases">
      <h4>{ t('newbyday.title') }</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={730}  height={300} data={timeline} margin={{top: 5, right: 0, left: 0, bottom: 5}}>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis type="category" dataKey="date" stroke="#8899a6" padding={{ left: 1, right: 1 }}/>
          <YAxis hide={true} stroke="#8899a6" domain={[0, dtmx + 100]}/>
          <Tooltip content={<CustomTooltip />} />
          <Bar name="Nuevos Casos" dataKey="confirmed" label={{ fill: '#4285f4', fontSize: 20 }} fill="#4285f4" stackId="a"/>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default NewCases;
