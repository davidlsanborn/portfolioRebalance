import * as types from './actionTypes';
import stockPriceApi from '../api/stockPriceApi';

export function getStockPriceSuccess(portfolio, stockPriceResult) {
  let result = [];
  portfolio.forEach(stock => {
    let foundStock = stockPriceResult.find(result => result.t === stock.symbol);
    result.push(Object.assign({}, stock, {price: foundStock !== undefined ? foundStock.l_cur : ""}));
  });
  return {type: types.UPDATE_STOCK_PRICE_SUCCESS, portfolio: result};
}

export function getStockPrices (portfolio) {
  return function(dispatch) {
    return stockPriceApi.getStockPrices(Array.from(portfolio, stock => stock.symbol)).then(priceResult => {
      dispatch(getStockPriceSuccess(portfolio, priceResult));
    }).catch(error => {
      //TODO implement proper error handling.  dispatch a getStockPriceFailure() which notifies user via toast
      throw(error);
    });
  };
}
