import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

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

// CREATE
// function* addDoner(action) {
//     try {
//         yield axios.post('/api/doner', { name: action.payload });
//         yield put({ type: 'FETCH_DONER_DETAILS' });
//     } catch (error) {
//         console.log('Add doner failed', error);
//         alert('Someting went wrong');
//     }
// }

function* addDoner(action) {
    try {
        const details = yield axios.post(`/api/doner`, action.payload);
        console.log("Doner Details coming back fromm server:", details.data.id);
    } catch (e) {
        console.log(e);
        alert("Something went wrong.");
    }
}


// UPDATE


//DELETE


function* donerSaga() {
    yield takeLatest('FETCH_DONER_DETAILS', fetchDonerDetails);
    yield takeLatest('ADD_DONER', addDoner);
}

export default donerSaga;