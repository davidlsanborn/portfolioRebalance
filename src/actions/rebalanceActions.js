import * as types from './actionTypes';

export function rebalancePortfolioSuccess(newPortfolio) {
  return { type: types.REBALANCE_PORTFOLIO_SUCCESS, newPortfolio: Object.assign({}, newPortfolio)};
}

