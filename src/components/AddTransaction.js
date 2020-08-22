import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  var today=new Date();
  const dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const { addTransaction } = useContext(GlobalContext);
  
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      dateToday,
    }

    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
      <label htmlFor="text">Transaction Title</label>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter title..." required />
      <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
      
        <button className="btn btn-success">Add transaction</button>
      </form>
    </>
  )
}
