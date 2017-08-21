import React, {PropTypes} from 'react';
import RebalanceListRow from './RebalanceListRow';

const RebalanceList = ({portfolio, totalValue, buySellOrder}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Symbol</th>
        <th>Current Shares</th>
        <th>Current %</th>
        <th>Action</th>
        <th>Ending Shares</th>
        <th>Resulting %</th>
      </tr>
      </thead>
      <tbody>
      {portfolio.map((stock, idx) =>
        <RebalanceListRow key={stock.symbol} stock={stock} totalValue={totalValue} buySellAmount = {buySellOrder[idx]} />
      )}
      </tbody>
    </table>
  );
};

RebalanceList.propTypes = {
  portfolio: PropTypes.array.isRequired,
  totalValue: PropTypes.number.isRequired,
  buySellOrder: PropTypes.array.isRequired
};

export default RebalanceList;
