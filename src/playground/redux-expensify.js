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