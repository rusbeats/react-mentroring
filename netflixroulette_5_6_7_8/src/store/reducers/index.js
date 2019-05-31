import {
    REQUEST_FILMS,
    RECEIVE_FILMS,
    TOGGLE_SORTING,
    TOGGLE_SEARCH_BY,
    REQUEST_FILM_BY_ID,
    RECEIVE_FILM_BY_ID,
    GET_FILM_FROM_STATE,
    FILM_NOT_FOUND
} from '../actions/actions';

const initialState = {
    data: [],
    film: {},
    isFetching: false,
    sortBy: 'rating',
    searchBy: 'title',
    notFound: false
};

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_FILMS:
        case REQUEST_FILM_BY_ID:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_FILMS:
            return Object.assign({}, state, {
                data: action.payload,
                isFetching: false,
                notFound: false
            });
        case RECEIVE_FILM_BY_ID:
            return Object.assign({}, state, {
                film: action.payload,
                isFetching: false,
                notFound: false
            });
        case TOGGLE_SORTING:
            return Object.assign({}, state, {
                sortBy: action.payload
            });
        case TOGGLE_SEARCH_BY:
            return Object.assign({}, state, {
                searchBy: action.payload
            });
        case GET_FILM_FROM_STATE:
            return Object.assign({}, state, {
                film: action.payload,
                notFound: false
            });
        case FILM_NOT_FOUND:
            return Object.assign({}, state, {
                isFetching: false,
                notFound: true
            });
        default:
            return state;
    }
}
