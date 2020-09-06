import { Lang, Region } from "./enums";

interface BaseApiRequest {
    region: Region;
    lang: Lang
}

interface BaseApiResponse<T> {
    result: T[],
    error: any
}

interface FormatedData {
    raw: number;
    fmt: string;
}

export interface GetSummaryRequest extends BaseApiRequest { }

export interface GetQuotesRequest extends BaseApiRequest {
    symbols: string[]
}

export interface GetMovers extends BaseApiRequest {
    start?: number;
    count?: number;
}


export interface QuoteResponse {
    quoteResponse: BaseApiResponse<Quote>;
}

export interface SummaryResponse {
    marketSummaryResponse: BaseApiResponse<Summary>;
}


export interface Quote {
    language: string;
    region: string;
    quoteType: string;
    quoteSourceName: string;
    exchangeDataDelayedBy: number;
    preMarketChange: number;
    preMarketChangePercent: number;
    preMarketTime: number;
    preMarketPrice: number;
    regularMarketChangePercent: number;
    regularMarketPreviousClose: number;
    fullExchangeName: string;
    longName: string;
    marketState: string;
    exchange: string;
    sourceInterval: number;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    pageViews: PageView;
    gmtOffSetMilliseconds: number;
    esgPopulated: boolean;
    tradeable: boolean;
    priceHint: number;
    shortName: string;
    market: string;
    regularMarketPrice: number;
    regularMarketTime: number;
    regularMarketChange: number;
    regularMarketVolume: number;
    symbol: string;
}

export interface PageView {
    shortTermTrend: string;
    midTermTrend: string;
    longTermTrend: string;
}

export interface Summary {
    exchangeTimezoneName: string;
    fullExchangeName: string;
    symbol: string;
    regularMarketChange: FormatedData;
    gmtOffSetMilliseconds: number;
    exchangeDataDelayedBy: number;
    language: string;
    regularMarketTime: FormatedData;
    exchangeTimezoneShortName: string;
    regularMarketChangePercent: FormatedData;
    quoteType: string;
    marketState: string;
    regularMarketPrice: FormatedData;
    market: string;
    tradeable: boolean;
    exchange: string;
    sourceInterval: number;
    region: string;
    shortName: string;
    regularMarketPreviousClose: FormatedData;
}