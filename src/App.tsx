import React, { Suspense } from 'react';

import {Header} from './header';
import {GeneralInfo} from './general';
import logo from './logo.svg';
import './App.scss';
import { Footer } from './footer';
import { NewCases } from './newcasesbyday';
import { SpreadTrend } from './outbreakspreadtrend';
import { ProvinceData } from './provincedata';
import { Info } from './info';
import { useFetch } from './utils/hooks';
import { TrajectoriesProvinces } from './trajectoriesprovinces';
import { GlobalInfo } from './globalinfo';
import { ProvinceMap } from './provincemap';

function App() {

  const [data, loading] = useFetch('assets/data/latest.json');
  
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Header date={data.updated}/>
        {/* <GlobalInfo data={data} /> */}
        <GeneralInfo data={data} />
        <ProvinceMap data={data} />
        <SpreadTrend data={data} />
        <NewCases data={data} />
        <TrajectoriesProvinces data={data} />
        <ProvinceData data={data} />
        <Info />
        <Footer />
      </div>
    </Suspense>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

export default App;
