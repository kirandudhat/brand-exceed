import { all, call, put, takeEvery } from "redux-saga/effects";
import { dashboard } from "../../services/DashboardServices";
import { dashBoardFailure, dashBoardRequest, dashBoardSucess } from "./action";
import { DASHBOARD } from "./types";

export function* dashBoardSaga(){
    yield put(dashBoardRequest());
    try {
      const result = yield call(dashboard);
      if (result) {
        yield put(dashBoardSucess(result));
      
      }
    } catch (error) {
      yield put(dashBoardFailure(error.response.data));
    }
  }
  
export default function* DashBoardSagas() {
    yield all([takeEvery(DASHBOARD,dashBoardSaga)]);
    
}