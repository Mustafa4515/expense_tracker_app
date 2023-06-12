import React, { useContext,  useState } from 'react';
import { useForm } from 'react-hook-form';
import { GlobalContext } from '../context/GlobalState';
import '../App.css';

const AddTransaction = () => {
  const [des, setDes] = useState(null);
  const [amount, setAmount] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addTransaction } = useContext(GlobalContext);
//
  const onSubmit = (data) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      des: data.des,
      amount: +data.amount,
    };
    addTransaction(newTransaction);
    setDes(null); // Reset des state after submission
    setAmount(null); // Reset amount state after submission
    
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor='text'>Text</label>
          <input
            {...register('des', { required: true })}
            type="text"
            value={des || ''}
            onChange={(e) => setDes(e.target.value)}
            placeholder="Enter Des..."
          />
          <br />
          {errors.des && (
            <div className="error">Please enter your Des....</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor='amount'>
            Amount<br />
            (negative - expense, positive - income)
          </label>
          <input
            {...register('amount', { required: true })}
            type="number"
            value={amount || ''}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <br />
          {errors.amount && (
            <div className="error">Please enter your Amount</div>
          )}
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
