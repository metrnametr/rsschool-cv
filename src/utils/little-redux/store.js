class Store{
    constructor(state, reducer){
        this._state = state;
        this._reducer = reducer;
        this._callbacks = [];
    };

    get state(){
        return this._state;
    };

    callbacks(cb){
        this._callbacks.push(cb);
    };

    dispatch(action){
        this._state = this._reducer(this._state, action);
        this._callbacks.forEach(cb => cb());
    };
};

export default (state, action) => new Store(state, action); 