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

export const thunkTestAsync = () => {
    return async (dispatch) => {
        try {
            let alphabet = 'abcdefghijklmnopqrstuvwxyz';
            let word = '';
            for(let i = 0; i < 1; i++){
                word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
            }
            dispatch({type: "TEST_THUNK", payload: word})
            const response = await api.fetch.testThunk(word)
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
