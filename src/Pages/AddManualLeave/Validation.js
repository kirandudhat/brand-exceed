import ManualLeaveFormModel from "./ManualLeaveFormModel";
import * as Yup from "yup";
const { user_id, slot, count, sickleave } = ManualLeaveFormModel

const Validation = Yup.object().shape({
    [user_id.name]: Yup.string().trim("The contact name cannot include leading and trailing spaces").required(`${user_id.requiredErrorMsg}`),
    [slot.name]: Yup.string().trim("The contact name cannot include leading and trailing spaces").required(`${slot.requiredErrorMsg}`),
    [count.name]: Yup.string().trim("The contact name cannot include leading and trailing spaces").required(`${count.requiredErrorMsg}`),
    [sickleave.name]: Yup.string().trim("The contact name cannot include leading and trailing spaces").required(`${sickleave.requiredErrorMsg}`),
})

export default Validation