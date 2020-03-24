import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSageMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const logger = createLogger();
const saga = createSageMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga, logger));

saga.run(rootSaga);

export default store;
