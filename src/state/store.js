import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

import * as reducers from './ducks'

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, devToolsEnhancer())

export default store