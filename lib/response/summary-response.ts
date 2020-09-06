import { BaseApiResponse } from "./base-api-response";
import { Summary } from "../models";

export interface SummaryResponse {
  marketSummaryResponse: BaseApiResponse<Summary>;
}
