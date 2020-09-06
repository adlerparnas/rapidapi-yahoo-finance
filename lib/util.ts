import * as http from 'https';
import * as querystring from 'query-string';

export function getApi<R>(hostname: string, path: string, params: any, apiKey: string, headers: any): Promise<R> {

  return new Promise((res, rej) => {
    const options = {
      "method": "GET",
      "hostname": hostname,
      "port": null,
      "path": `${path}?${querystring.stringify(params, { arrayFormat: 'comma' })}`,
      "headers": {
        ...headers,
        "x-rapidapi-host": hostname,
        "x-rapidapi-key": apiKey,
        "useQueryString": true
      }
    };

    const req = http.request(options, function (response) {
      const chunks = [];

      response.on("data", function (chunk) {
        chunks.push(chunk);
      });

      response.on("end", function () {
        const body = Buffer.concat(chunks);

        try {
          res(JSON.parse(body.toString()) as R);
        } catch (e) {
          rej(e);
        }
      });
    });

    req.end();
  });

}

export interface YahooFinanceCall<T, R> {
  (request: T): Promise<R>;
}

export function YahooFinanceApiCall<P, R>(path: string) {

  function decorator<T extends YahooFinanceCall<P, R> | undefined>(target: any, protpertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
    function value(request: P) {
      return getApi<R>(this.apiHost, path, request, this.apiKey, {})
    }

    return Object.defineProperty(target, protpertyKey, { value })
  }

  return decorator;
}

export abstract class YahooFinanceService {
  constructor(public apiHost: string, public apiKey: string) { }
}
