import React from 'react';
import  { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selecteExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for_desktop">Amount</div>
        </div>
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