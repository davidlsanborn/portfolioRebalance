import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import RebalancePage from './components/rebalance/RebalancePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PortfolioPage} />
    <Route path="portfolio" component={PortfolioPage} />
    <Route path="rebalance" component={RebalancePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
