import { BaseApiRequest } from "./base-api-request";
import { ChartInterval, ChartRange } from "../enums";

export interface GetChartsRequest extends BaseApiRequest {
  symbol: string;
  interval: ChartInterval;
  range: ChartRange;
  comparisons?: string[]
}
