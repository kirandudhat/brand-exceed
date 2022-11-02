import {
  editEmployee,
  editEmployeeBank,
  editEmployeeEducation,
  editEmployeeExperience,
  editEmployeeProject,
} from "../../services/editEmpServices";
import {
  changeStepValueInEdit,
  editEmpBankFailuer,
  editEmpBankRequest,
  editEmpBankSuccess,
  editEmpEducationFailuer,
  editEmpEducationRequest,
  editEmpEducationSuccess,
  editEmpExperienceFailuer,
  editEmpExperienceRequest,
  editEmpExperienceSuccess,
  editEmployeeFailure,
  editEmployeeRequest,
  editEmployeeSuccess,
  editEmpProjectFailuer,
  editEmpProjectRequest,
  editEmpProjectSuccess,
} from "./action";
import {
  EDIT_EMPLOYEE_BANK,
  EDIT_EMPLOYEE_DETAILS,
  EDIT_EMPLOYEE_EDUCATION,
  EDIT_EMPLOYEE_EXPRIENCE,
  EDIT_EMPLOYEE_FAILUER,
  EDIT_EMPLOYEE_PROJECT,
} from "./types";
import { all, takeEvery, put, call } from "redux-saga/effects";

export function* editEmpBasicDeatilsSaga({ payload }) {
  yield put(editEmployeeRequest());

  try {
    const result = yield call(editEmployee, payload);

    if (result.status == true) {
      yield put(editEmployeeSuccess({ ...payload }));
      yield put(changeStepValueInEdit(1));
      // toast.success(" edit successfully");
    } else {
      yield put(editEmployeeFailure(result));
      // toast("not edit");
    }
  } catch (error) {
    yield put(editEmployeeFailure(error.response.data));

    //   toast.error("Validation Error");
  }
}

export function* editEmpEducationDetailsSaga({ payload }) {
  yield put(editEmpEducationRequest());

  try {
    const result = yield call(editEmployeeEducation, payload);
    if (result.status == true) {
      yield put(editEmpEducationSuccess({ ...payload }));
      yield put(changeStepValueInEdit(2));
      // toast.success(" edit successfully");
    } else {
      yield put(editEmpEducationFailuer(result));
      // toast("not edit");
    }
  } catch (error) {
    yield put(editEmpEducationFailuer(error.response.data));

    //   toast.error("Validation Error");
  }
}

export function* editEmpExperienceDetailsSaga({ payload }) {
  yield put(editEmpExperienceRequest());

  try {
    const result = yield call(editEmployeeExperience, payload);
    if (result.status == true) {
      yield put(editEmpExperienceSuccess({ ...payload }));
      yield put(changeStepValueInEdit(3));
      // toast.success(" edit successfully");
    } else {
      yield put(editEmpExperienceFailuer(result));
      // toast("not edit");
    }
  } catch (error) {
    yield put(editEmpExperienceFailuer(error.response.data));

    //   toast.error("Validation Error");
  }
}

export function* editEmpProjectDetailsSaga({ payload }) {
  yield put(editEmpProjectRequest());

  try {
    const result = yield call(editEmployeeProject, payload);

    if (result.status == true) {
      yield put(editEmpProjectSuccess({ ...payload }));
      yield put(changeStepValueInEdit(4));
      // toast.success(" edit successfully");
    } else {
      yield put(editEmpProjectFailuer(result));
      // toast("not edit");
    }
  } catch (error) {
    yield put(editEmpProjectFailuer(error.response.data));

    //   toast.error("Validation Error");
  }
}

export function* editEmpBankDetailsSaga({ payload }) {
  yield put(editEmpBankRequest());

  try {
    const result = yield call(editEmployeeBank, payload);
    if (result.status == true) {
      yield put(editEmpBankSuccess({ ...payload }));
      yield put(changeStepValueInEdit(5));
      // toast.success(" edit successfully");
    } else {
      yield put(editEmpBankFailuer(result));
      // toast("not edit");
    }
  } catch (error) {
    yield put(editEmpBankFailuer(error.response.data));

    //   toast.error("Validation Error");
  }
}

export default function* editEmpSaga() {
  yield all([
    takeEvery(EDIT_EMPLOYEE_DETAILS, editEmpBasicDeatilsSaga),
    takeEvery(EDIT_EMPLOYEE_EDUCATION, editEmpEducationDetailsSaga),
    takeEvery(EDIT_EMPLOYEE_EXPRIENCE, editEmpExperienceDetailsSaga),
    takeEvery(EDIT_EMPLOYEE_PROJECT, editEmpProjectDetailsSaga),
    takeEvery(EDIT_EMPLOYEE_BANK, editEmpBankDetailsSaga),
  ]);
}
