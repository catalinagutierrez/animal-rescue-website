import DiscoverActionTypes from './discover.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
};

const discoverReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DiscoverActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case DiscoverActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            };
        case DiscoverActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default discoverReducer;
