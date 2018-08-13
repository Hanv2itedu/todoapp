import { createStore } from 'redux';
import reducer from './reducer/reducer';
import addReducer from './reducer/addReducer'

const store = createStore(reducer);
console.log(store.getState());

export default store;

// import { createStore, applyMiddleware } from "redux";
// import reducer from "./reducer/combineReducer";
// import { persistStore, persistReducer } from "redux-persist"
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2
//  };
 
//  const persistReducers = persistReducer(persistConfig, reducer);

//  export const store = createStore(persistReducers,composeWithDevTools(applyMiddleware(logger)));
//  export const persistor = persistStore(store);