# rapidapi-yahoo-finance

NodeJS library for Yahoo Finance API prividade by RapidAPI [https://rapidapi.com/apidojo/api/yahoo-finance1](https://rapidapi.com/apidojo/api/yahoo-finance1)

## Usage

```typescript
import { MarketService, Lang, Region, QuoteResponse } from "rapidapi-yahoo-finance";

const API_HOST = 'apidojo-yahoo-finance-v1.p.rapidapi.com';
const API_KEY = 'YOUR_API_KEY';


async function run() {
    const a = new MarketService(API_HOST, API_KEY);

    const res:QuoteResponse = await a.getQuotes({
        lang: Lang.en,
        region: Region.CA,
        symbols: ['AAPL', 'GOOG', 'MSFT']
    });

    console.log(res);
}


run();
```

## Supported Endpoints

- `/market/get-summary`
- `/market/get-quotes`

## TODO

  - [ ] Implement tests
  - [ ] Implement all missing endpoints
  - [ ] Abstract module used for request to make this library compatible with browsers
