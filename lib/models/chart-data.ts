import { ChartMeta } from "./chart-meta";
import { ChartQuote } from "./chart-quote";
import { ChartIndicator } from "./chart-indicator";

export interface ChartData {
  meta: ChartMeta;
  timestamp: number[];
  comparisons?: ChartQuote[],
  indicators: ChartIndicator;
}
