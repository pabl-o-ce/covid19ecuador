export interface IPropsDate {
    date: string;
}

export interface IPropsData {
    data: IData;
}

export interface IData {
    provinces: IProvince[];
    daily: IDaily[];
    updated: string;
}

export interface IProvince {
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
}

export interface IDaily {
    date: string;
    confirmed: number;
    confirmedCumulative: number;
    active: number;
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
}
