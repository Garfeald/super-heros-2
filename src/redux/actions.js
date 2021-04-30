import {api} from "../api/Api";


export const startSerching = (word) => ({
    type: 'START_SEARCHING',
    payload: word
})

export const searchedSuperHerosAsync = (supers) => ({
    type: 'SET_SUPERS',
    payload: supers,
});

export const startSerchingDetails = (id) => ({
    type: 'START_SEARCHING_DETAILS',
    payload: id,
})

export const searchedDetailsAsync = (details) => ({
    type: 'SET_DETAILS',
    payload: details,
});

export const putData = (data) => ({
    type: 'TEST',
    payload: data
})

// export const thunkTestAsync = () => (dispatch, getState) => {
//     api.fetch.testThunk().then(data => dispatch(putData(data)))
// }

export const thunkTestAsync = () => {
    return async (dispatch) => {
        try {
            dispatch({type: "TEST_THUNK"})
            const response = await api.fetch.testThunk()
            console.log(response.data)
            setTimeout(() => {
                dispatch({type: "PUT_DATA", payload: response.data.results})
            }, 1500)
        } catch (e) {
            dispatch({
                type: "FETCH_USERS_ERROR",
                alert(e){}
            })
        }
    }
}
