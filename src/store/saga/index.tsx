import { all, takeLatest, call, put } from "redux-saga/effects";

const safe = (fetchStatusAction: any, sagaWorker: any, ...argsuments: any) => function* (action: any) {
  let saga = sagaWorker;
  let args = argsuments;
  if(typeof fetchStatusAction === 'function'){
    saga = fetchStatusAction;
    args = sagaWorker ? [sagaWorker, ...args] : [];
  }
	try {
    yield put({ type: fetchStatusAction, fetchStatus: 'LOADING'});
		yield call(saga, ...args, action);
    yield put({ type: fetchStatusAction, fetchStatus: 'FINISHED'});
	} catch (err: any) {
    yield put({ type: fetchStatusAction, fetchStatus: 'FAILED'});
    yield put({ type: 'ENQUEUE_SNACKBAR', notification: {
      message: err.toString()
    } });
    console.error('API:', err)
	}	
}

const startSagas = function (fetchStatusAction: any, sagas: any){
  return Object.entries(sagas)
    .map( ([key, value]) => takeLatest(key, safe(fetchStatusAction, value)) );
}

const saga = function* (params: any) {
  
  // contacts

};
export default saga;
