import ProjectFormModel from "./ProjectFormModel";
import * as Yup from "yup";

const {
    
    projectname,
    projecttech,
    startdate,
    enddate,
    projectdescription,
    projectdeveloper,
    projecttype,
    projectclient
    
        
    
}=ProjectFormModel

const validationSchema = Yup.object().shape({
        [projectname.name]: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("Project Name is required"),
        [projecttech.name]: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("Project Technology is required"),
        [startdate.name]: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("Date is required"),
        [enddate.name]: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("Date is required"),
        [projectdescription.name]: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("Descripations is required"),
        [projectdeveloper.name]: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("Developer is required"),
        [projecttype.name]: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("Project Type is required"),
        [projectclient.name]: Yup.string().trim('The contact name cannot include leading and trailing spaces').required("Client  is required"),
        
    })

    export default validationSchema