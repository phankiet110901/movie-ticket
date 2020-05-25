const initialState = ""; // state mac dinh

let UserReducer = (state = initialState, action) => {
    switch(action.type){
        case "Login":
            return action.payload;
        default:
            return state;
    }
}

export default UserReducer;