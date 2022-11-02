import "./../OurEmployee/OurEmployee.css";
import "./survey.css";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const CreateSurvey = () => {
  return (
    <div className="ouremployee">
      <div className="employeeWrapper">
        <span style={{ fontWeight: "bold" }} className="surveyTitle">
          Create Surveys
        </span>
      </div>
      <div className="row">
        <div className="col">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Name *
          </FormLabel>
          <input name="name" />
          <div className="surveyRadio">
            <FormLabel
              id="demo-form-control-label-placement"
              className="labelInput"
            >
              Layout Type
            </FormLabel>
            <span>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="layout"
                defaultValue="horizontal"
              >
                <FormControlLabel
                  value="horizontal"
                  control={<Radio />}
                  label="Horizontal"
                  // labelPlacement="start"
                />
                <FormControlLabel
                  value="vertical"
                  control={<Radio />}
                  label="Vertical"
                  // labelPlacement="start"
                />
              </RadioGroup>
            </span>
          </div>
          <div className="surveyRadio">
            <FormLabel
              id="demo-form-control-label-placement"
              className="labelInput"
            >
              Survey Type
            </FormLabel>
            <span>
              <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                name="layout"
                defaultValue="horizontal"
              >
                <FormControlLabel
                  value="horizontal"
                  control={<Radio />}
                  label="App Survey"
                  // labelPlacement="start"
                />
                <FormControlLabel
                  value="vertical"
                  control={<Radio />}
                  label="Web Survey"
                  // labelPlacement="start"
                />
              </RadioGroup>
            </span>
          </div>
          {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Show Header" /> */}
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Show Header
          </FormLabel>
          <Checkbox inputProps={{ "aria-label": "controlled" }} />
          <div className="d-flex">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
           Welcome Image
          </FormLabel>
          {/* <input type="file" /> */}
          <TextField type="file" variant="standard"/>
          </div>
          <div className="d-flex">
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
          Thank you Image*
          </FormLabel>
          {/* <input type="file" /> */}
          <TextField type="file" variant="standard"/>
          </div>
          <FormLabel
            id="demo-form-control-label-placement"
            className="labelInput"
          >
            Thank You Duration (Seconds)
          </FormLabel>
          <input name="name" />
        </div>
        <div className="col">
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
      </div>
    </div>
  );
};
export default CreateSurvey;
