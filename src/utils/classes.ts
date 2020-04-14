import { IData, IProvince, IDaily } from "./interfaces";

export class Data implements IData {
    provinces: IProvince[];
    daily: IDaily[];
    updated: string;

    constructor() {
        this.provinces = [];
        this.daily = [];
        this.updated = '';
    }
}

export class Province implements IProvince {
    date: string;
    province: string;
    confirmed: number;
    confirmedlog: number;
    confirmedCumulative: number;
    active: number;
    activelog: number;
    activeCumulative: number;
    recovered: number;
    recoveredCumulative: number;
    deceased: number;
    deceasedCumulative: number;

    constructor() {
        this.date = '';
        this.province = '';
        this.confirmed = 0;
        this.confirmedlog = 0;
        this.confirmedCumulative = 0;
        this.active = 0;
        this.activelog = 0;
        this.activeCumulative = 0;
        this.recovered = 0;
        this.recoveredCumulative = 0;
        this.deceased = 0;
        this.deceasedCumulative = 0;
    }
}

export class Daily implements IDaily {
    date: string;
    confirmed: number;
    confirmedlog: number;
    confirmedCumulative: number;
    active: number;
    activelog: number;
    activeCumulative: number;
    recovered: number;
    recoveredCumulative: number;
    deceased: number;
    deceasedCumulative: number;
    critical: number;
    criticalCumulative: number;
    suspect: number;
    suspectCumulative: number;
    tested: number;
    testedCumulative: number;
    recover: number;
    mortality: number;

    constructor() {
        this.date = '';
        this.confirmed = 0;
        this.confirmedlog = 0;
        this.confirmedCumulative = 0;
        this.active = 0;
        this.activelog = 0;
        this.activeCumulative = 0;
        this.recovered = 0;
        this.recoveredCumulative = 0;
        this.deceased = 0;
        this.deceasedCumulative = 0;
        this.critical = 0;
        this.criticalCumulative = 0;
        this.suspect = 0;
        this.suspectCumulative = 0;
        this.tested = 0;
        this.testedCumulative = 0;
        this.recover = 0;
        this.mortality = 0;
    }
}