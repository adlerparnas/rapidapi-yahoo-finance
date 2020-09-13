import { Criteria } from "./criteria";

export interface CriteriaMeta {
  size: number;
  offset: number;
  sortField: string;
  sortType:string;
  quoteType:string;
  topOperator:string;
  criteria: Criteria[]
}
