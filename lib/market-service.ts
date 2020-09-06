import { GetQuotesRequest, QuoteResponse, GetSummaryRequest, SummaryResponse } from './models';
import { YahooFinanceService, YahooFinanceApiCall } from './util';

export class MarketService extends YahooFinanceService  {
    @YahooFinanceApiCall<GetQuotesRequest, QuoteResponse>('/market/get-quotes')
    getQuotes(request: GetQuotesRequest) : Promise<QuoteResponse> { return; }

    @YahooFinanceApiCall<GetSummaryRequest, SummaryResponse>('/market/get-summary')
    getSummary(request: GetSummaryRequest): Promise<SummaryResponse> { return; }
}
