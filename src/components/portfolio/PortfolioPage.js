import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as priceActions from '../../actions/priceActions';
import StockList from './StockList';

class PortfolioPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      totalValue: props.portfolio.reduce((sum, stock) => sum + stock.shares * stock.price,0),
      portfolioInBalance: false
    };

    this.rebalancePortfolio = this.rebalancePortfolio.bind(this);
    this.updatePortfolioPrices = this.updatePortfolioPrices.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({totalValue: nextProps.portfolio.reduce((sum, stock) => sum + stock.shares * stock.price,0)});
  }

  rebalancePortfolio() {
    //Redirect to rebalance page
    browserHistory.push('/rebalance');
  }

  updatePortfolioPrices() {
    this.props.actions.getStockPrices(this.props.portfolio);
  }

  render() {
    const portfolio = this.props.portfolio;
    const totalValue = this.state.totalValue;
    const portfolioInBalance = this.state.portfolioInBalance;

    return (
      <div>
        <StockList portfolio={portfolio} totalValue={totalValue}/>
        <input
          type="submit"
          disabled={portfolioInBalance}
          value="Re-Balance Portfolio"
          className="btn btn-primary actionButtons"
          onClick={this.rebalancePortfolio}/>
        <input
          type="submit"
          value="Update PortfolioPrices"
          className="btn btn-primary actionButtons"
          onClick={this.updatePortfolioPrices}/>
      </div>
  );
  }
}

PortfolioPage.propTypes = {
  actions: PropTypes.object.isRequired,
  portfolio: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    portfolio: state.portfolio
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(priceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
