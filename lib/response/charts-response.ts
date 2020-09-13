import { BaseApiResponse } from "./base-api-response";
import { ChartData } from "../models/chart-data";

export interface ChartsResponse {
  chart: BaseApiResponse<ChartData>;
}
