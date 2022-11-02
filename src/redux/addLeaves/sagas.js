
import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import { ADD_LEAVES } from "./types";
import { addLeavesFailure, addLeavesRequest, addLeavesSuccess } from "./action";
import { addLeaves } from "../../services/addLeavesServices";

export function* addLeavesSaga({ payload }) {
  
    yield put(addLeavesRequest());
  
    try {
        
      const result = yield call(addLeaves, payload);
      if (result.status == true) {
        yield put(addLeavesSuccess({ ...payload }));
        toast.success(result.message);
      } else {
        yield put(addLeavesFailure(result));
        toast(result.message);
      }
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
      yield put(addLeavesFailure(error.response.data));
  
    }
  }
  
  export default function* leavesSaga() {
    yield all([
      takeEvery(ADD_LEAVES, addLeavesSaga),
      
    ]);
  }