import * as types from './actionTypes';
import portfolioApi from '../api/mockPortfolioApi';
import {getStockPrices} from './priceActions';

export function loadPortfolioSuccess(portfolio) {
  return { type: types.LOAD_PORTFOLIO_SUCCESS, portfolio};
}

export function loadPortfolio () {
  //load the hard coded portfolio from a mockApi.
  //if this were a real app, this data would most likely come from a database.

  return function(dispatch) {
    return portfolioApi.getPortfolio().then(portfolio => {
      //Once the portfolio has been loaded, fire off the request to get current stock prices
      dispatch(getStockPrices(portfolio));
      dispatch(loadPortfolioSuccess(portfolio));
    }).catch(error => {
      throw(error);
    });
  };
}
