import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
//import './firebase/firebase';

const store = configureStore();

store.subscribe (() => {
    const state = store.getState();
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(expenses);
})

// store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 1542313000000}));
// store.dispatch(addExpense({description: 'Gas bill', amount: 50, createdAt: 1542314000000}));
// store.dispatch(addExpense({description: 'Rent bill', amount: 1095, createdAt: 1542312000000}));

//store.dispatch(setTextFilter('bill'));
//store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
    
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});


