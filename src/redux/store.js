import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";
import sagas from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const Store = createStore(
  rootReducer(),
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);



export default Store;
// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(countReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(exampleSaga);