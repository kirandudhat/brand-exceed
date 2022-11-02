import { all, takeEvery, put, call } from "redux-saga/effects";
import { editHoliday } from "../../services/editHolidayServices";
import { editHolidayFailure, editHolidayRequest, editHolidaySuccess } from "./actions";
import { EDIT_HOLIDAYS } from "./type";


export function* editHolidayListSaga( {payload}) {
  
  yield put(editHolidayRequest());
  
  try {
    const result = yield call(editHoliday, payload);
    
    if (result.status == true) {
      yield put(editHolidaySuccess({ ...payload }));
    
    } else {
      yield put(editHolidayFailure(result));
      // toast("not edit");
    }
  } catch (error) {
    
    yield put(editHolidayFailure(error.response.data));

    //   toast.error("Validation Error");
  }
}
export default function* editHolidaysSaga() {
  yield all([
    takeEvery(EDIT_HOLIDAYS, editHolidayListSaga),
    
  ]);
}