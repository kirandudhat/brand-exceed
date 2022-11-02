import { ProjectInitialValue } from "./ProjectInitialValue";

export const FormateEditProjects = (editProjectData) => {
  const {
    projectname,
    projecttech,
    startdate,
    enddate,
    projectdescription,
    projecttype,
    projectdevelopers,
    clientprojects,
  } = editProjectData;

  const editprojectValues = {
    ...ProjectInitialValue,
    projectname,
    projecttech: projecttech.split(","),
    startdate,
    enddate,
    projectdescription,
    projecttype,
    projectdeveloper: projectdevelopers.map((developer) =>
      String(developer.user.id)
    ),
    projectclient: clientprojects.map((client) => String(client.client_id)),
  };
  return editprojectValues;
};
