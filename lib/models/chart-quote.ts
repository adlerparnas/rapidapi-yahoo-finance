export interface ChartQuote {
  symbol?: string;
  previousClose?: number;
  gmtoffset?: number;
  chartPreviousClose?: number;
  open: number[];
  high: number[];
  volume: number[];
  low: number[];
  close: number[];
}
