import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = (({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
}));

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
});

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state;
    }
    
})

store.subscribe(() => {
    console.log(store.getState());
});



// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 10
// });

store.dispatch(incrementCount())

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 10}));

