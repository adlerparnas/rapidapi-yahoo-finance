import { YahooFinanceService, YahooFinanceApiCall } from './util';
import { GetQuotesRequest, GetSummaryRequest } from './request';
import { QuoteResponse, SummaryResponse, ChartsResponse } from './response';
import { GetChartsRequest } from './request/get-charts-request';

export class MarketService extends YahooFinanceService  {
    @YahooFinanceApiCall<GetQuotesRequest, QuoteResponse>('/market/get-quotes')
    getQuotes(request: GetQuotesRequest) : Promise<QuoteResponse> { return; }

    @YahooFinanceApiCall<GetSummaryRequest, SummaryResponse>('/market/get-summary')
    getSummary(request: GetSummaryRequest): Promise<SummaryResponse> { return; }

    @YahooFinanceApiCall<GetChartsRequest, ChartsResponse>('/market/get-charts')
    getCharts(request: GetChartsRequest): Promise<ChartsResponse> { return; }
}
