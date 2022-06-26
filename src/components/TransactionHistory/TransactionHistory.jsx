import PropTypes from 'prop-types';
import { formateTransactionAmount } from 'utils/formateTransactionAmount';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, currency, amount }) => (
          <tr key={id} className={css.tableRow}>
            <td className={css.tableData}>{type}</td>
            <td className={css.tableData}>
              {formateTransactionAmount(amount)}
            </td>
            <td className={css.tableData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
