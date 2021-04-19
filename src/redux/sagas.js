import { takeEvery, put, call, all } from 'redux-saga/effects';
import { api } from '../api/Api'
import { searchedDetailsAsync, searchedSuperHerosAsync } from './actions';

function* fetchedSuperHerosWorker(action) {
    const { payload } = action;
    
    const res = yield call(api.fetch.fetchSupers, payload);
      if (res.data.results) {
        yield put(searchedSuperHerosAsync(res.data.results));
      }
}
  
function* fetchSuperHerosWatcher() {
    yield takeEvery('START_SEARCHING', fetchedSuperHerosWorker);
}

function* fetchedDetailsWorker(action) {
    const { payload } = action;
    
    const res = yield call(api.fetch.fetchDetails, payload);
      if (res.data) {
        yield put(searchedDetailsAsync(res.data));
      }
}
  
function* fetchDetailsWatcher() {
    yield takeEvery('START_SEARCHING_DETAILS', fetchedDetailsWorker);
}
  
export function* rootSaga() {
    yield all([fetchSuperHerosWatcher(), fetchDetailsWatcher()]);
}