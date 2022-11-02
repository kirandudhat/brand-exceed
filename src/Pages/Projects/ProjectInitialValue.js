import ProjectFormModel from "./ProjectFormModel";
const {
  projectname,
  projecttech,
  startdate,
  enddate,
  projectdescription,
  projectdeveloper,
  projecttype,
  projectclient,
} = ProjectFormModel;

export const ProjectInitialValue = {
  [projectname.name]: "",
  [projecttech.name]: [],
  [enddate.name]: "",
  [startdate.name]: "",
  [projectdescription.name]: "",
  [projectdeveloper.name]: [],
  [projecttype.name]: "",
  [projectclient.name]: [],
};
