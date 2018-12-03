import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses';


const AddExpensePage = (props) => (
    <div>
        <h1>This is Add Expenses Page</h1>
        <ExpenseForm 
            onSubmit = {(expense) => {
                props.dispatch(startAddExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);