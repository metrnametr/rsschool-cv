export default (reducers = {}) => {
    return (state, action) => {
        const combineReducers = {};
        Object.keys(reducers).forEach(key => {
            combineReducers.key = reducers[key](state, action);
        })
        return combineReducers;
    }
}