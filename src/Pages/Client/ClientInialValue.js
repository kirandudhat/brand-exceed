import ClientFormModel from "./ClientFormModel";
const {

    
    companyName,
    location,
    website,
    linkdinProfile,
    clientcomments,
    priority,
    clientname,
    email,
    clientlinkedin,
    phone
       
   
}=ClientFormModel

const ClientInialValue={

    [companyName.name]:"",
    [location.name]:"",
    [website.name]:"",
    [linkdinProfile.name]:"",
    [clientcomments.name]:"",
    [priority.name]:"",
    [clientname.name]:"",
    [email.name]:"",
    [clientlinkedin.name]:"",
    [phone.name]:""
}
export default ClientInialValue