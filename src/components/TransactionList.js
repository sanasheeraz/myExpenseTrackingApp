import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Transaction History</h3>
      <table className="list table table-bordered table-hover">
        <thead>
        <tr><th>  Title  </th><th> Amount </th><th> Date </th><th>Remove</th></tr>
        </thead>
        <tbody>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        </tbody>
      </table>
    </>
  )
}
