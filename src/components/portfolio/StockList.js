import React, {PropTypes} from 'react';
import StockListRow from './StockListRow';

const StockList = ({portfolio, totalValue}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Symbol</th>
        <th>Shares</th>
        <th>Current Price</th>
        <th>Current %</th>
        <th>Target %</th>
      </tr>
      </thead>
      <tbody>
      {portfolio.map(stock =>
        <StockListRow key={stock.symbol} stock={stock} totalValue={totalValue}/>
      )}
      </tbody>
    </table>
  );
};

StockList.propTypes = {
  portfolio: PropTypes.array.isRequired,
  totalValue: PropTypes.number.isRequired
};

export default StockList;
