import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);



  const income = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setAmount(0);
    setText('');
  }

  const expense = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -amount
    }

    addTransaction(newTransaction);
    setAmount(0);
    setText('');
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => 
            setText(e.target.value)
            } placeholder="Enter text..." />
        </div>
        <div className="form-control">
         
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." min='0' onkeydown={ (evt) => evt.key === 'e' && evt.preventDefault() }/>
        </div>
        <button className="btn" onClick={income} >Income</button>
        <button className="btn" onClick={expense} >Expense</button>
      </form>
    </>
  )
}
