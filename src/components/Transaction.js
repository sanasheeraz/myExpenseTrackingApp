import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    // <tr className={transaction.amount === 0 ? 'false' : transaction.amount<0?'minus':"plus"}>
    <tr className={transaction.amount === 0 ? 'false' : 'true'}>
      <td>{transaction.text} </td><td>{sign}${Math.abs(transaction.amount)}</td><td>{transaction.dateToday}</td><td ><button onClick={() => deleteTransaction(transaction.id)} className={transaction.amount<0?'delete-btn-minus':"delete-btn-plus"} ><img src="delete.png" alt="Delete" className="image"/></button></td>
    </tr>
  )
}
