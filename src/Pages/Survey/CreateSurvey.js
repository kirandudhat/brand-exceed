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
import { useEffect, useState } from "react";
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
import { ADD_CLIENTS } from "../../redux/addClients/types";
import { useDispatch, useSelector } from "react-redux";
import { imageUplode } from "../../services/imgUploadServices";
import { uploadimagefunction } from "../../Utils/common/Common";
import { VIEW_EMPLOYEE_DETAILS } from "../../redux/viewEmployee/types";

const CreateSurvey = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = new URLSearchParams(window.location.search);
  let name = params.get("name");
  let layout = params.get("layout");
  let survey_type = params.get("survey_type");
  let id = params.get("id");
  const user = sessionStorage.getItem('user')
  let userId = JSON.parse(user)
  const surveyData = useSelector(
    (state) => state.viewEmployeeDeatilsReducer.viewEmpData
    );
    
  const [survey, setSurvey] = useState({
    user_id: userId.role > 2 ? userId?.parent_id : userId?.id,
    name: null,
    layout: null,
    survey_type:null,
    headerText: null,
    headerImage: null,
    welcomeImage: null,
    thankyouImage: null,
    thankyouDuration: null,
    theme: null,
    accessPin: null,
    timeOut: null,
    saveOnTime: null,
    defaultLang: null,
    loopSurvey: null,
    pdf: null,
    backgroundLoc: null,
    captureMandatory: null,
    startPage: null,
    endPageSuccess: null,
    endPageTer: null,
    field: null,
    owner_id: userId.role > 2 ? userId?.id : 0
  });
  const handleChange = async (e) => {
    if(!e.target){

      const { name, value } = e;
      setSurvey({
        ...survey,
        [name]: value,
      });
    }
    else{
    const { name, value } = e.target;
    if(e.target.checked){
      setSurvey({
        ...survey,
        [name]: e.target.checked
      })
    }
    else if(e.target.type !== 'file'){

      setSurvey({
        ...survey,
        [name]: value,
      });
    } else {
      const formData = new FormData();
      formData.append('image',  e.target.files[0])
      let uploadImage = await imageUplode(formData)
      setSurvey({
        ...survey,
        [name]: uploadImage.data.data,
      });
    }
  }
  };
  const handleSubmit = () => {
    dispatch({ type: ADD_CLIENTS, payload: survey });
  };
 
  useEffect(()=>{
    if(id){
      dispatch({ type: VIEW_EMPLOYEE_DETAILS, payload: id  });
    }  else {
      setSurvey({...survey,
        name: name,
        layout: layout,
        survey_type:survey_type,})
    }
    return(()=>{
      setSurvey({
        user_id: userId.role > 2 ? userId?.parent_id : userId?.id,
        name: null,
        layout: null,
        survey_type:null,
        headerText: null,
        headerImage: null,
        welcomeImage: null,
        thankyouImage: null,
        thankyouDuration: null,
        theme: null,
        accessPin: null,
        timeOut: null,
        saveOnTime: null,
        defaultLang: null,
        loopSurvey: null,
        pdf: null,
        backgroundLoc: null,
        captureMandatory: null,
        startPage: null,
        endPageSuccess: null,
        endPageTer: null,
        field: null,
        owner_id: userId.role > 2 ? userId?.id : 0
      })
    })
  },[])
  
useEffect(()=>{
  if(surveyData){
  let data = {...surveyData}
  delete data.field;
  setSurvey(data)
  }
},[surveyData])

  return (
    <div className="ouremployee">
      <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
          Create Surveys
        </span>
        <button
          className="backbtn"
          variant="contained"
          type="submit"
          onClick={() => history.push("/survey")}
        >
          Back
        </button>
      </div>
      {survey.layout === "horizontal" && survey.survey_type === "web_survey" ? (
        <HwebSurvey
          onChange={handleChange}
          survey={survey}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
      {survey.layout === "horizontal" && survey.survey_type === "app_survey" ? (
        <HappSurvey
          onChange={handleChange}
          survey={survey}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
      {survey.layout === "vertical" && survey.survey_type === "web_survey" ? (
        <VwebSurvey
          onChange={handleChange}
          survey={survey}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
      {survey.layout === "vertical" && survey.survey_type === "app_survey" ? (
        <VappSurvey
          onChange={handleChange}
          survey={survey}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default CreateSurvey;
