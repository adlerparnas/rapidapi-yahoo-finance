import { YahooFinanceService, YahooFinanceApiCall } from './util';
import { GetQuotesRequest, GetSummaryRequest } from './request';
import { QuoteResponse, SummaryResponse } from './response';

export class MarketService extends YahooFinanceService  {
    @YahooFinanceApiCall<GetQuotesRequest, QuoteResponse>('/market/get-quotes')
    getQuotes(request: GetQuotesRequest) : Promise<QuoteResponse> { return; }

    @YahooFinanceApiCall<GetSummaryRequest, SummaryResponse>('/market/get-summary')
    getSummary(request: GetSummaryRequest): Promise<SummaryResponse> { return; }
}
