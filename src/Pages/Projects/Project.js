import React from "react";
import { NavLink } from "react-router-dom";
import Datatable from "../../Components/DataTables/Datatable";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Button } from "react-bootstrap";
import EditIcon from "@material-ui/icons/Edit";
import "./Project.css";
import { VIEW_PROJECTS_LIST } from "../../redux/projectsListing/types";
import { useDispatch, useSelector } from "react-redux";
import history from "../../Utils/History/History";
import { VIEW_PROJECTS_DETAILS } from "../../redux/ViewProjects/types";
import moment from "moment";

const Project = () => {
  const dispatch = useDispatch();
  const viewProject = useSelector(
    (state) => state.ProjectsListReducer.projectsList
  );
  const isLoading = useSelector((state) => state.ProjectsListReducer.loading);
  console.log("isLoading", isLoading);
  // React.useEffect(() => {
  //   dispatch({ type: VIEW_PROJECTS_LIST });
  // }, []);

  const handleEditProject = (id) => {
    history.push(`/project/edit/${id}`);
  };
  const handleViewProject = (id) => {
    history.push(`/project/view/${id}`);
    dispatch({ type: VIEW_PROJECTS_DETAILS, payload: id });
  };
  const getformattedDate = (list) => {
    return list.map((date) => ({
      ...date,
      startdate: moment(date.startdate).format("DD-MM-YYYY"),
    }));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 85 },
    {
      field: "projectname",
      headerName: "Project Name",
      width: 200,

      renderCell: (row) => {},
    },

    {
      field: "projectdescription",
      headerName: "Descriptions",
      type: "text",
      width: 250,
      editable: true,
    },
    {
      field: "projecttech",
      headerName: "Project Technology",
      type: "text",
      width: 200,
      editable: true,
    },
    {
      field: "startdate",
      headerName: "Start Date",
      type: "text",
      width: 110,
      editable: true,
    },
    // {
    //   field: "enddate",
    //   headerName: "End Date",
    //   type: "text",
    //   width: 200,
    //   editable: true,
    // },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 100,
      renderCell: (row) => (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleViewProject(row.id)}
          >
            <VisibilityIcon />
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditProject(row.id)}
          >
            <EditIcon />
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="project">
        <div className="projectWrapper">
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>
           PROJECT LIST
          </span>
          <NavLink to="/project/add">
            <button className="btncolor" variant="contained" type="submit">
              ADD PROJECTS
            </button>
          </NavLink>
        </div>
        <div className="projectmain shadow-none p-0">
          {viewProject?.rows?.length > 0 && (
            <Datatable
              column={columns}
              tableData={getformattedDate(viewProject.rows)}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Project;
