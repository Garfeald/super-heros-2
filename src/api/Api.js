
const axios = require('axios')

const accessToken = '101257945413557'


export const api = {
    fetch: {
        fetchSupers: (payload) => 
            axios.get(`https://www.superheroapi.com/api.php/${accessToken}/search/${payload}`),

        fetchDetails: (payload) => 
            axios.get(`https://www.superheroapi.com/api.php/${accessToken}/${payload}`)
    }
}