import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import { ADD_MANUAL_LEAVES } from "./types";
import { addManualLeavesRequest, addManualLeavesSuccess, addManualLeavesFailure } from "./action";
import { addManualLeaves } from "../../services/addManualLeavesServices";

export function* addManualLeavesSaga({ payload }) {
  
    yield put(addManualLeavesRequest());
    try {
      const result = yield call(addManualLeaves, payload);
      if (result.status == true) {
        yield put(addManualLeavesSuccess({ ...payload }));
        toast.success(result.message);
      } else {
        yield put(addManualLeavesFailure(result));
        toast(result.message);
      }
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
      yield put(addManualLeavesFailure(error.response.data));
    }
  }
  
  export default function* manualLeavesSaga() {
    yield all([
      takeEvery(ADD_MANUAL_LEAVES, addManualLeavesSaga),
    ]);
  }