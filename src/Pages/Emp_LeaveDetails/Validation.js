import LeaveFormModel from "./LeaveFormModel";
import * as Yup from "yup";
const {
    reason,
    from_date,
    to_date,
    leave_type

}=LeaveFormModel

const Validation= Yup.object().shape({
        [reason.name]: Yup.string().trim("The contact name cannot include leading and trailing spaces").required(`${reason.requiredErrorMsg}`),
        [from_date.name]: Yup.string().trim("The contact name cannot include leading and trailing spaces").required(`${from_date.requiredErrorMsg}`),
        [to_date.name]: Yup.string().trim("The contact name cannot include leading and trailing spaces").required(`${to_date.requiredErrorMsg}`),
        [leave_type.name]: Yup.string().trim("The contact name cannot include leading and trailing spaces").required(`${leave_type.requiredErrorMsg}`),

    })

export default Validation