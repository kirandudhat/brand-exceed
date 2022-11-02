import moment from "moment";
import React, { useEffect } from "react";
// import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { VIEW_PROJECTS_DETAILS } from "../../redux/ViewProjects/types";
// import Datatable from '../../Components/DataTables/Datatable';
import "./Project.css";
export default function ViewProjects() {
  const ViewEmpData = useSelector(
    (state) => state.viewEmployeeDeatilsReducer.viewEmpData
  );
  const ViewProjectData = useSelector(
    (state) => state.viewProjectsDeatilsReducer.viewProjectData
  );
  const isLoading = useSelector(
    (state) => state.viewProjectsDeatilsReducer.loading
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch({ type: VIEW_PROJECTS_DETAILS, payload: id });
    }
  }, []);

 const getdteformate=(date)=>{
  return date=moment(date).format("DD-MM-YYYY")
 }
    
    
      
    

  return (
    <>
    {isLoading ? (
      <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
    ):
      <div className="project">
        <div className="projectWrapper">
          <NavLink exact to="/admin/project" className="link">
            <span style={{ fontWeight: "bold" }}>Project Details</span>
          </NavLink>
        </div>
        <div className="projectmain">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="card-title mb-0">{ViewEmpData?.name}</h6>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>
                              <b>User ID</b>
                            </td>
                            <td>{ViewProjectData?.id}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Project Name</b>
                            </td>
                            <td>{ViewProjectData?.projectname}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Project Technology</b>
                            </td>
                            <td>{ViewProjectData?.projecttech}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Project Type</b>
                            </td>
                            <td>{ViewProjectData?.projecttype}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Start Date</b>
                            </td>
                            <td>{getdteformate(ViewProjectData?.startdate)}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>End Date</b>
                            </td>
                            <td>{getdteformate(ViewProjectData?.enddate)}</td>
                          </tr>
                          <tr>
                            {/* <td>
                                                        <b>Date of Birth</b>
                                                    </td>
                                                    <td>
                                                    {ViewEmpData?.date_of_birth}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Aadhar Card</b>
                                                    </td>
                                                    <td>
                                                    {ViewEmpData?.aadhar_card}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Address</b>
                                                    </td>
                                                    <td >
                                                    {ViewEmpData?.parment_address}
                                                    </td> */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>
                              <b>Description</b>
                            </td>
                            <td>{ViewProjectData?.projectdescription}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Project Developer</b>
                            </td>
                            <td>
                              {ViewProjectData?.projectdevelopers.map(
                                (user) => {
                                  return <>{user.user.name},</>;
                                }
                              )}
                              {/* {ViewProjectData?.projectdevelopers[0].user.name} */}
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <b>Client Projects</b>
                            </td>
                            <td>
                            {ViewProjectData?.clientprojects.map(
                                (client) => {
                                  return <>{client.client.clientname},</>
                                }
                              )}
                              {/* {
                                ViewProjectData?.clientprojects[0]?.client
                                  .clientname
                              } */}
                            </td>
                          </tr>
                          {/* <tr> */}
                          {/* <td>
                                                        <b> Company LinkedIn </b>
                                                    </td>
                                                    <td>
                                                        {ViewProjectData?.linkdinProfile}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Location</b>
                                                    </td>
                                                    <td>
                                                        {ViewProjectData?.location}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Client Project</b>
                                                    </td>
                                                    <td>
                                                        {ViewProjectData?.clientprojects[0]}
                                                    </td>
                                                </tr> */}
                          <tr>
                            {/* <td>
                                                        <b>Status</b>
                                                    </td>
                                                    <td>
                                                        {ViewProjectData?.status}
                                                    </td> */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
                    <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                        
                    </div>
                         */}
          </div>
        </div>
        {/* <div className="empyloyeemain">
               <span style={{ fontWeight: "bold" }}> Leave Deatils </span>
           <Datatable column={columns}/> 
           </div> */}
      </div>
}
    </>
  );
}
