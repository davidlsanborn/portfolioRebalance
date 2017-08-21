import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as rebalanceActions from '../../actions/rebalanceActions';
import RebalanceList from './RebalanceList';

class RebalancePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      totalValue: 6,
      buySellOrder: []
    };
  }

  render() {
    const portfolio = this.props.portfolio;

    let buySellOrder = [];
    let totalValue = this.props.portfolio.reduce((sum, stock) => sum + stock.shares * stock.price, 0);

    //Calculate the buy/sell actions required to balance the portfolio
    this.props.portfolio.forEach((stock, idx) => {
      let targetShares = stock.price > 0 ? Math.round(((stock.targetPercent / 100) * totalValue) / stock.price) : 0;
      buySellOrder[idx] = targetShares - stock.shares;
    });

    return (
      <div>
        <h3>Rebalance your Portfolio</h3>
        <RebalanceList portfolio={portfolio} totalValue={totalValue} buySellOrder={buySellOrder}/>
      </div>
    );
  }
}

RebalancePage.propTypes = {
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
    //rebalanceActions would be called to execute the buy/sell order and update the store
    //NYI - this would most likely happen via a button press.
    actions: bindActionCreators(rebalanceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RebalancePage);
