import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransacton = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() *100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
  return (
    <>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value = {text} on onChange={(e) => setText(e.target.value)} placeholder='Enter Text ....'/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br/>
                    (negetive - expense, positive - income)
                </label>
                <input type="number" value = {amount} on onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount....'/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}
