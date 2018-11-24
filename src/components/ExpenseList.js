import React from 'react';
import  { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selecteExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return (
                <ExpenseListItem
                    {...expense}
                    key = {expense.id}
                /> 
            )
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selecteExpenses(state.expenses, state.filters)
    };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;