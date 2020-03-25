import React, { useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = React.createContext();

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'incrementByAmount':
            return {count: state.count + action.payload};
        default:
            throw new Error();
    }
}

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
};

export const useCounter = () => {
    return useContext(GlobalContext);
};
