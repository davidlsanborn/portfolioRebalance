import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rebalanceReducer(state = initialState.portfolio, action) {
  switch(action.type) {
    case types.REBALANCE_PORTFOLIO_SUCCESS:
      return action.newPortfolio;
    default:
      return state;
  }
}
