import * as Yup from "yup";
import HolidaysFormModel from "./HolidaysFormModel"
const {

    holiday_name,
    from_date,
    to_date,
        
    
}=HolidaysFormModel

const HolidayFormValidation=Yup.object().shape({
        holiday_name: Yup.string().trim('The contact name cannot include leading and trailing spaces').required(`${holiday_name.requiredErrorMsg}`),
        from_date: Yup.string().trim('The contact name cannot include leading and trailing spaces').required(`${from_date.requiredErrorMsg}`),
        to_date: Yup.string().trim('The contact name cannot include leading and trailing spaces').required(`${to_date.requiredErrorMsg}`),
    })
export default HolidayFormValidation