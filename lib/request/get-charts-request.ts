import { ChartInterval, ChartRange } from "../enums";
import { BaseApiRequest } from "./base-api-request";

export interface GetChartsRequest extends BaseApiRequest {
  symbol: string;
  interval: ChartInterval;
  range: ChartRange;
  comparisons?: string[]
}


export {
  ChartInterval,
  ChartRange
};
