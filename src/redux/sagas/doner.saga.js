import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

// CREATE
function* addDoner(action) {
    try {
        yield axios.post('/api/doner', { name: action.payload });
        yield put({ type: 'FETCH_DONER_DETAILS' });
    } catch (error) {
        console.log('Add doner failed', error);
        alert('Someting went wrong');
    }
}

// READ
function* fetchDonerDetails() {
    try {
        const response = yield axios.get('/api/doner');
        yield put({ type: 'SET_DONER_DETAILS', payload: response.data});
    } catch (error) {
        console.log('Doner details get request failed'), error;
        alert('Something went wrong');
    }
}

// UPDATE


//DELETE


function* donerSaga() {
    yield takeLatest('FETCH_DONER_DETAILS', fetchDonerDetails);
    yield takeLatest('ADD_DONER', addDoner);
}

export default donerSaga;