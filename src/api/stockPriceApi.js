// This api makes http requests to google finance to retrieve the current prices of stocks
// All calls return promises.

import jsonp from 'jsonp';

const URL_BASE = 'http://finance.google.com/finance/info?client=ig&q=';

class StockPriceApi {
  static getStockPrices(symbolList) {
    return new Promise((resolve, reject) => {
      //request current price data from google finance
      jsonp(URL_BASE + symbolList.join(), null, function (err, data) {
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      });
    });
  }
}

export default StockPriceApi;
