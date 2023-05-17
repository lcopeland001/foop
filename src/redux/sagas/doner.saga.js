import axios from "axios";
import { put, takelatest } from 'redux-saga/effects';

// CREATE


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
    
}

export default donerSaga;