import {combineReducers} from 'redux';
import portfolio from './portfolioReducer';
import rebalance from './rebalanceReducer';

const rootReducer = combineReducers({
  portfolio, rebalance
});

export default rootReducer;
