import { Quote } from "../models";
import { BaseApiResponse } from "./base-api-response";

export interface QuoteResponse {
  quoteResponse: BaseApiResponse<Quote>;
}
