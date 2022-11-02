import { all, takeEvery, put, call } from "redux-saga/effects";
import History from "../../Utils/History/History";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  addBankFailure,
  addBankRequest,
  addBankSuccess,
  addEducationFailure,
  addEducationRequest,
  addEducationSuccess,
  addEmployeeFailure,
  addEmployeeRequest,
  addEmployeeSuccess,
  addExperienceFailure,
  addExperienceRequest,
  addExperienceSuccess,
  addProjectFailure,
  addProjectRequest,
  addProjectSuccess,
  changeStepValue,
} from "./action";
import {
  addEmployee,
  addEmployeeBank,
  addEmployeeEducation,
  addEmployeeExperience,
  addEmployeeProjects,
} from "../../services/addEmpServices";

import {
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_BANK,
  ADD_EMPLOYEE_EDUCATION,
  ADD_EMPLOYEE_EXPERIENCE,
  ADD_EMPLOYEE_PROJECT,
} from "./types";
export function* addEmpBasicDeatilsSaga({ payload }) {
  yield put(addEmployeeRequest());

  try {
    const result = yield call(addEmployee, payload);
    if (result.status == true) {
      yield put(addEmployeeSuccess({ ...payload }));
      yield put(changeStepValue(1));
      toast.success(result.message);
    } else {
      yield put(addEmployeeFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addEmployeeFailure(error.response.data));
  }
}

export function* addEducationSaga({ payload }) {
  // yield put(addEducationRequest());

  try {
    const result = yield call(addEmployeeEducation, payload);

    if (result.status == true) {
      yield put(addEducationSuccess({ ...payload }));

      yield put(changeStepValue(2));
      toast.success(result.message);
    } else {
      yield put(addEducationFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addEducationFailure(error.response.data));
  }
}
//
export function* addEmpExperienceSaga({ payload }) {
  yield put(addExperienceRequest());
  try {
    const result = yield call(addEmployeeExperience, payload);

    if (result.status == true) {
      yield put(addExperienceSuccess({ ...payload }));

      yield put(changeStepValue(3));
      toast.success(result.message);
    } else {
      yield put(addExperienceFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addExperienceFailure(error.response.data));

  }
}

export function* addEmpProjectSaga({ payload }) {
  yield put(addProjectRequest());
  try {
    const result = yield call(addEmployeeProjects, payload);

    if (result.status == true) {
      yield put(addProjectSuccess({ ...payload }));

      yield put(changeStepValue(4));
      toast.success(result.message);
    } else {
      yield put(addProjectFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addProjectFailure(error.response.data));

  }
}

export function* addEmpBankSaga({ payload }) {
  yield put(addBankRequest());
  try {
    const result = yield call(addEmployeeBank, payload);

    if (result.status == true) {
      yield put(addBankSuccess({ ...payload }));

      yield put(changeStepValue(5));
      toast.success(result.message);
    } else {
      yield put(addBankFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addBankFailure(error.response.data));

  }
}

export default function* addEmpSaga() {
  yield all([
    takeEvery(ADD_EMPLOYEE, addEmpBasicDeatilsSaga),
    takeEvery(ADD_EMPLOYEE_EDUCATION, addEducationSaga),
    takeEvery(ADD_EMPLOYEE_EXPERIENCE, addEmpExperienceSaga),
    takeEvery(ADD_EMPLOYEE_PROJECT, addEmpProjectSaga),
    takeEvery(ADD_EMPLOYEE_BANK, addEmpBankSaga),
  ]);
}
