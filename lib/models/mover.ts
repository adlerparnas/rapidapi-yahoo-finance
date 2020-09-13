import { Quote } from "./quote";
import { CriteriaMeta } from "./criteria-meta";

export interface Mover {
  id: string;
  title:string;
  description:string;
  canonicalName:string;
  criteriaMeta: CriteriaMeta;
  rawCriteria: string;
  start: number;
  count: number;
  total:number;
  quotes:Quote[];
  predefinedScr: boolean;
  versionId: number;
}
