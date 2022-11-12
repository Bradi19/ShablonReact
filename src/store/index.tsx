import reducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(saga, null)
export default store
