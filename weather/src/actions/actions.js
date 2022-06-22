import axios from 'axios'

export const GET_ALL_CITIES = 'GET_ALL_CITIES'

export const getAllCities = () => {
    return async (dispatch) => {
        let res = await axios.get(`https://weather-rodrigo-perez.herokuapp.com/cities`)
        dispatch({
            type: GET_ALL_CITIES,
            payload: res.data
        })
    };
};

export const saveCity = (payload) => {
    return async () => {
        await axios.post(`https://weather-rodrigo-perez.herokuapp.com/`, payload)
    }
}

export const deleteCity = (name) => {
    return async () => {
        await axios.post(`https://weather-rodrigo-perez.herokuapp.com/cities`, name)
    }
}