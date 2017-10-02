let defaultState = {

};

let mainReducer = (state = defaultState, action) =>{
    if(action.type === "SET_DATA"){

    } else {
        return{
            ...state
        }
    }
};

export default mainReducer;