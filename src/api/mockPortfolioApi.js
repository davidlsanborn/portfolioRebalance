import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const portfolio = [
  {
    symbol: "AAPL",
    shares: 50,
    targetPercent: 22
  },
  {
    symbol: "GOOG",
    shares: 200,
    targetPercent: 38
  },
  {
    symbol: "CYBR",
    shares: 150,
    targetPercent: 0
  },
  {
    symbol: "ABB",
    shares: 900,
    targetPercent: 0
  },
  {
    symbol: "GFN",
    shares: 0,
    targetPercent: 25
  }
  ,
  {
    symbol: "ACAD",
    shares: 0,
    targetPercent: 15
  }
];

class PortfolioApi {
  static getPortfolio() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], portfolio));
      }, delay);
    });
  }
}

export default PortfolioApi;
