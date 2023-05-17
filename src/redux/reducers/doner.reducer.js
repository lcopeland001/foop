const donerReducer = (state = [], action) => {
    if (action.type === 'SET_DONER_DETAIL') {
        return action.payload;
    }
    return state;
}

export default donerReducer;