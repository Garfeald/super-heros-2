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

export const thunkTestAsync = () => (dispatch, getState) => {
    api.fetch.testThunk().then(data => dispatch(putData(data)))
}
