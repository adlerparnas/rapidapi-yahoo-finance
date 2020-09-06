import { BaseApiRequest } from "./base-api-request";

export interface GetMoversRequest extends BaseApiRequest {
  start?: number;
  count?: number;
}
