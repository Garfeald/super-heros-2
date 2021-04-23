const axios = require('axios')

const accessToken = '101257945413557'

export const thunkAsync = () => (dispatch, action) => {
    axios.get(`https://www.superheroapi.com/api.php/${accessToken}/search/bat`)
        .then((data => dispatch(action(data))))
}