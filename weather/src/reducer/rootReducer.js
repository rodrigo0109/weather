import { GET_ALL_CITIES } from "../actions/actions";

const initialState = {
  cities: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return {
        cities: action.payload
      }

    default:
      return state
  }
};

export default rootReducer;