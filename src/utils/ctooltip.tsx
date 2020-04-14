import React from 'react';

export function CustomTooltip (p: any) {
    const listPayload = p.payload.map((pi: any, i: any) =>
      <tr key={p.payload[i].name}>
        <td className="name"><span style={{background: p.payload[i].fill}}></span>{p.payload[i].name}</td>
        <td className="desc">{p.payload[i].value}</td>
      </tr>
    );
    if (p.active) {
      return (
        <table className="c3-tooltip">
          <tbody>
            <tr>
              <th colSpan={2} className="label">{p.label}</th>
            </tr>
            {listPayload}
          </tbody>
        </table>
      );
    }
  
    return null;
  };