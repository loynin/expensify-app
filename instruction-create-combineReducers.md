In this instruction, we will create the multiple state for the app.
To use multipe state, we need to use `combineReducers` from `redux`. 
There for we need to import the modules as the following from the redux:
`
import {createStore, combineReducers} from 'redux';
`
Then we need to create the reducer for each of the state that we will 
store in the redux. In this exercise, we will create two reducers:
`
// Expenses Reducer

//Here we create a default value for the expense reducer
const expensesReducerDefaultState = [];


const expensesReducer = ( state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
`
Then this is the filter reducer

`
// Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate : undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState , action) => {
    switch (action.type) {
        default: 
            return state;
    }
};
`

Finally, we will use `combineReducers` to register boths of the reducers in order to create the store.

//Store creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filter: filterReducer

})
);

Here we display the states of the operation:

`
console.log(store.getState());
`

Here is the final code: 

`
import {createStore, combineReducers} from 'redux';


// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate : undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState , action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

//Store creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filter: filterReducer

})
);

console.log(store.getState());
`