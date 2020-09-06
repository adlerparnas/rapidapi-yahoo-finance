import { BaseApiRequest } from "./base-api-request";

export interface GetQuotesRequest extends BaseApiRequest {
  symbols: string[]
}
