import ManualLeaveFormModel from "./ManualLeaveFormModel";

const { user_id, slot, count, sickleave } = ManualLeaveFormModel

const ManualLeaveInitalValues = {
    [user_id.name]: "",
    [slot.name]: "",
    [count.name]: "6",
    [sickleave.name]: "5",
}

export default ManualLeaveInitalValues