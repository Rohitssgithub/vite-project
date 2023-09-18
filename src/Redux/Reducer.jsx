import * as actionTypes from '../Redux/Types';


let initialState = {
    users: [],
    filterUser: []
}


console.log(initialState.users)

export const usersReducers = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GETALL_USER:
            console.log(action.payload)
            // return action.payload
            return {
                ...state,               // Copy the existing state
                users: action.payload  // Update the users array with new data
            };
        // case actionTypes.SEARCH_USER:
        //     console.log(action.payload)
        //     // return action.payload
        //     return {
        //         ...state,               // Copy the existing state
        //         filterUser: action.payload.users  // Update the users array with new data
        //     };


        // case actionTypes.ADDNEW_TODO:
        //     return [
        //         ...state,
        //         action.payload
        //     ]
        // case actionTypes.UPDATE_TODO:
        //     console.log(action.payload)
        //     return state.map((ele) => (
        //         ele.id === action.payload.id ? action.payload : ele
        //     ));

        // case actionTypes.DELETE_USER:
        //     console.log(action.payload)
        //     const deletedUserId = action.payload.id;
        //     const updatedUsers = state.users.filter(user => user.id !== deletedUserId);
        //     return {
        //         ...state,
        //         users: updatedUsers // Update the users array with the filtered array
        //     };


        default:
            return state;
    }
}