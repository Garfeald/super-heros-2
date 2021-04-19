

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
