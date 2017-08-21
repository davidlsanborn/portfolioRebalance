import React, {PropTypes} from 'react';

const RebalanceListRow = ({stock, totalValue, buySellAmount}) => {
  let price = stock.price || "...";
  let currentPercent = totalValue > 0 ? Math.round(100 * (stock.price * stock.shares) / totalValue) : 0;
  let resultPercent = totalValue > 0 ? Math.round(100 * (stock.price * (stock.shares + buySellAmount)) / totalValue) : 0;
  let actionClass = buySellAmount > 0 ? 'buyShares' : 'sellShares';
  let actionName = buySellAmount > 0 ? 'Buy' : 'Sell';
  let actionAmount = Math.abs(buySellAmount);

  return (
    <tr>
      <td>{stock.symbol}</td>
      <td>{stock.shares}</td>
      <td>{currentPercent}%</td>
      <td className={actionClass}>{actionName} {actionAmount}</td>
      <td>{stock.shares + buySellAmount}</td>
      <td>{resultPercent}%</td>
    </tr>
  );
};

RebalanceListRow.propTypes = {
  stock: PropTypes.object.isRequired,
  totalValue: PropTypes.number.isRequired,
  buySellAmount: PropTypes.number.isRequired
};

export default RebalanceListRow;
