import { BaseApiResponse } from "./base-api-response";
import { Summary } from "../models";

export interface MoversResponse {
  finance: BaseApiResponse<Summary>;
}
