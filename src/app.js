import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses} from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

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

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered= true;
        
    }
};


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
