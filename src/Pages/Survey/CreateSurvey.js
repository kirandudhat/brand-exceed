import "./../OurEmployee/OurEmployee.css";
import "./survey.css";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import Button from "@mui/material/Button";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useHistory, useLocation, useParams } from "react-router-dom";
import HwebSurvey from "./HwebSurvey";
import HappSurvey from "./HappSurvey";
import VappSurvey from "./VappSurvey";
import VwebSurvey from "./VwebSurvey";

const CreateSurvey = () => {

  const history = useHistory();
  const params = new URLSearchParams(window.location.search) 
  let name = params.get('name')
  let layout = params.get('layout') 
  let survey_type = params.get('survey_type') 
  const [survey,setSurvey] = useState({
    name:name,
    layout:layout,
    survey_type:survey_type,
    headerText:name,
    headerImage:'',
    welcomeImage:'',
    thankyouImage:'',
    thankyouDuration:0,
    theme:'',
    accessPin:'',
    timeOut:'',
    saveOnTime:false,
    defaultLang:'',
    loopSurvey:false,
    pdf:false,
    backgroundLoc:'',
    captureMandatory:'',
    startPage:'',
    endPageSuccess:'',
    endPageTer:'', 
})
const handleChange = (e) =>{
  const {name, value} = e.target
  console.log("name", name, value)
  setSurvey({
    ...survey,
    [name]: value
  })
}
  return (
    <div className="ouremployee">
      <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
          Create Surveys
        </span>
        <button className="backbtn" variant="contained" type="submit" onClick={()=>history.push("/admin/survey")}>
          Back
        </button>
      </div>
      {layout === "horizontal" && survey_type === "web_survey" ?    
      <HwebSurvey onChange={handleChange} survey={survey}/> : "" }
      {layout === "horizontal" && survey_type === "app_survey" ?    
      <HappSurvey onChange={handleChange} survey={survey}/> : "" }
      {layout === "vertical" && survey_type === "web_survey" ?    
      <VwebSurvey onChange={handleChange} survey={survey}/> : "" }
      {layout === "vertical" && survey_type === "app_survey" ?    
      <VappSurvey onChange={handleChange} survey={survey}/> : "" }
      

    </div>
  );
};
export default CreateSurvey;
