import { FormatedData } from "./formated-data";

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
