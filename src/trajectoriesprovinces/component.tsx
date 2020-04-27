import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { LineChart, Line, Legend, Tooltip, YAxis, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import groupby from 'lodash.groupby';

import './style.scss';
import { Province } from '../utils/classes';
import { IPropsData } from '../utils/interfaces';
import { CustomTooltip } from '../utils/ctooltip';

function TrajectoriesProvinces(props: IPropsData) {
    const [t] = useTranslation('common');
    let dtmx = 100;
    const provinces = JSON.parse(JSON.stringify(props.data.provinces)) as Province[];
    provinces.map((d: Province, i: number) => {
      d.date = format(new Date(d.date), 'MMMM d',{locale: es});
      d.confirmedlog = Math.log2(d.confirmedCumulative);
      d.activelog = Math.log2(d.activeCumulative);
      dtmx = Math.max(dtmx, d.confirmedCumulative);
      return i;
    });
    console.log(provinces.filter((p)=>p.date === format(new Date(), 'MMMM d',{locale: es})).sort((a: Province, b: Province) => (+a.confirmedCumulative > +b.confirmedCumulative) ? -1 : (+a.confirmedCumulative < +b.confirmedCumulative) ? 1 : 0));
    const trjs = provinces.filter((p) => {
      return p.province === 'Guayas' || p.province === 'Pichincha' || p.province === 'Los Ríos' || p.province === 'Azuay' || p.province === 'Manabí' || p.province === 'El Oro' || p.province === 'Cañar' || p.province === 'Santa Elena' || p.province === 'Chimborazo'
    }).map((p)=>{
      const e: any = { date: p.date };
      e[p.province.replace(/\s/g, "")] = p.confirmedCumulative;
      return e
    });
    let obj: any = {};
    for(let i = 0; i < trjs.length; i++){
      const date = trjs[i].date;
      const p_date = obj[date] || {}; 
      obj[date] = Object.assign(p_date, trjs[i]);
    }
    const result: any[] = Object.values(obj);
    return (
    <section className="trajectoriesprovinces">
      <h4>{ t('trajectories.title') }</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={750} height={300} margin={{top: 5, right: 20, left: 20, bottom: 5}} data={result}>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis type="category" dataKey="date" stroke="#8899a6" allowDuplicatedCategory={false}/>
          <YAxis hide={true} stroke="#8899a6" domain={[0, dtmx + 300]}/>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotoneX" name="Guayas" dataKey="Guayas" label={{ fill: '#4285f4', fontSize: 20 }} legendType="square" fill="#4285f4" stroke="#4285f4" strokeWidth={2} activeDot={{ r: 4 }} />
          <Line type="monotoneX" name="Pichincha" dataKey="Pichincha" label={{ fill: '#0066cc', fontSize: 20 }} legendType="square" fill="#0066cc" stroke="#0066cc" strokeWidth={2} activeDot={{ r: 4 }} />
          <Line type="monotoneX" name="Los Ríos" dataKey="LosRíos" label={{ fill: '#1eb2a6', fontSize: 20 }} legendType="square" fill="#1eb2a6" stroke="#1eb2a6" strokeWidth={2} activeDot={{ r: 4 }} />
          <Line type="monotoneX" name="Azuay" dataKey="Azuay" label={{ fill: '#ff0000', fontSize: 20 }} legendType="square" fill="#ff0000" stroke="#ff0000" strokeWidth={2} activeDot={{ r: 4 }}  />
          <Line type="monotoneX" name="Manabí" dataKey="Manabí" label={{ fill: '#00923f', fontSize: 20 }} legendType="square" fill="#00923f" stroke="#00923f" strokeWidth={2} activeDot={{ r: 4 }}  />
          <Line type="monotoneX" name="El Oro" dataKey="ElOro" label={{ fill: '#f4e04d', fontSize: 20 }} legendType="square" fill="#f4e04d" stroke="#f4e04d" strokeWidth={2} activeDot={{ r: 4 }}  />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}


export default TrajectoriesProvinces;
