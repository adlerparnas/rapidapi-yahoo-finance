import { Timestamp } from "./timestamp";

export interface TradingPeriod {
  pre: Timestamp
  regular: Timestamp
  post: Timestamp
}
