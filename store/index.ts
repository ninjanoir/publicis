import { createStore, applyMiddleware } from 'redux'
import {persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'


const initialState = {}

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = []


const store = createStore(
	persistedReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)


export const persistor  = persistStore(store)


export default store




