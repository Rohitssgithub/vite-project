import axios from "axios";
import { GETALL_USER, SEARCH_USER } from "./Types";


export const getAllUsers = (data, page) => async (dispatch) => {
    console.log(page)
    try {
        const response = await axios.get(`https://dummyjson.com/users/search?q=${data}&limit=10&skip=${page * 10 - 10}`);

        console.log(response.data)
        dispatch({ type: GETALL_USER, payload: response.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API', error.message);
    }
}

// export const getSerchUser = (data) => async (dispatch) => {
//     console.log(data)
//     try {
//         const response = await axios.get(`https://dummyjson.com/users/search?q=${data}&limit=10&skip=0`);
//         console.log(response)
//         console.log('User deleted successfully:', response.data);
//         dispatch({ type: SEARCH_USER, payload: response.data });

//     } catch (error) {
//         console.error('Error deleting user:', error);
//     }
// }

// export const addNewTodo = (data) => async (dispatch) => {
//     const response = await fetch("https://64e34f09bac46e480e789213.mockapi.io/user", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     }
//     );

//     try {
//         const result = await response.json();
//         console.log(result)
//         dispatch({ type: ADDNEW_TODO, payload: result });
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// }



// export const updateTodo = (data, ids) => async (dispatch) => {
//     console.log(data)
//     const response = await fetch(
//         `https://64e34f09bac46e480e789213.mockapi.io/user/${ids}`,
//         {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         }
//     )
//     try {
//         const res = await response.json();
//         console.log(res)
//         dispatch({ type: UPDATE_TODO, payload: res });

//     } catch (error) {
//         console.log(error)
//     }
// }


