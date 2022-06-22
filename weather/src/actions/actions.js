import axios from 'axios'

export const GET_ALL_CITIES = 'GET_ALL_CITIES'

export const getAllCities = () => {
    return async (dispatch) => {
        let res = await axios.get(`http://localhost:3001/cities`)
        dispatch({
            type: GET_ALL_CITIES,
            payload: res.data
        })
    };
};

export const saveCity = (payload) => {
    return async () => {
        await axios.post(`http://localhost:3001/`, payload)
    }
}

export const deleteCity = (name) => {
    return async () => {
        await axios.post(`http://localhost:3001/cities`, name)
    }
}