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
import { useDispatch } from "react-redux";
import { imageUplode } from "../../services/imgUploadServices";
import { uploadimagefunction } from "../../Utils/common/Common";

const CreateSurvey = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = new URLSearchParams(window.location.search);
  let name = params.get("name");
  let layout = params.get("layout");
  let survey_type = params.get("survey_type");
  const [survey, setSurvey] = useState({
    name: name,
    layout: layout,
    survey_type: survey_type,
    headerText: name,
    headerImage: null,
    welcomeImage: null,
    thankyouImage: null,
    thankyouDuration: null,
    theme: null,
    accessPin: null,
    timeOut: null,
    saveOnTime: false,
    defaultLang: null,
    loopSurvey: false,
    pdf: false,
    backgroundLoc: null,
    captureMandatory: null,
    startPage: null,
    endPageSuccess: null,
    endPageTer: null,
    field: null,
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if(e.target.type !== 'file'){

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
  };

  const handleSubmit = () => {
    dispatch({ type: ADD_CLIENTS, payload: survey });
    // history.push("/admin/CreateSurveyForm")
  };
  // useEffect(()=>{
  // },[])

  // const imageHandle = async (e) => {
  //   const imagesse = await uploadimagefunction(e.target.files[0]);
  //   setSurvey(imagesse)
  // };

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
          onClick={() => history.push("/admin/survey")}
        >
          Back
        </button>
      </div>
      {layout === "horizontal" && survey_type === "web_survey" ? (
        <HwebSurvey
          onChange={handleChange}
          survey={survey}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
      {layout === "horizontal" && survey_type === "app_survey" ? (
        <HappSurvey
          onChange={handleChange}
          survey={survey}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
      {layout === "vertical" && survey_type === "web_survey" ? (
        <VwebSurvey
          onChange={handleChange}
          survey={survey}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
      {layout === "vertical" && survey_type === "app_survey" ? (
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
