import React, {PropTypes} from 'react';

const stockListRow = ({stock, totalValue}) => {
  let price = stock.price || "...";
  let currentPercent = totalValue > 0 ? Math.round(100 * (stock.price * stock.shares) / totalValue) : 0;
  return (
    <tr>
      <td>{stock.symbol}</td>
      <td>{stock.shares}</td>
      <td>${price}</td>
      <td>{currentPercent}%</td>
      <td>{stock.targetPercent}%</td>
    </tr>
  );
};

stockListRow.propTypes = {
  stock: PropTypes.object.isRequired,
  totalValue: PropTypes.number.isRequired
};

export default stockListRow;
