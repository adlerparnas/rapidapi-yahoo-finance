import { Currency } from "../enums";
import { TradingPeriod } from "./trading-period";
import { Timestamp } from "./timestamp";
import { ChartInterval, ChartRange } from "../request/get-charts-request";

export interface ChartMeta {
  currency: Currency;
  symbol: string;
  exchangeName: string;
  instrumentType: string;
  firstTradeDate: number;
  regularMarketTime: number;
  gmtoffset: number;
  timezone: string;
  exchangeTimezoneName: string;
  regularMarketPrice: number;
  chartPreviousClose: number;
  previousClose: number;
  scale:number;
  priceHint: number;
  currentTradingPeriod: TradingPeriod;
  tradingPeriods: Array<Timestamp[]>
  dataGranularity: ChartInterval
  range: ChartRange
  validRanges: ChartRange[]
}
