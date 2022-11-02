import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { VIEW_CLIENTS_DETAILS } from "../../redux/ViewClients/types";
import "./Client.css";
function priorityFun(priority) {
  switch (priority) {
    case 0:
      return (priority = "High");

    case 1:
      return (priority = "Low");
    default:
      break;
  }
}

export default function ViewClients() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const ViewClientData = useSelector(
    (state) => state.viewClientsDeatilsReducer.viewClientsData
  );
  const isLoading = useSelector(
    (state) => state.viewClientsDeatilsReducer.loading
  );
  useEffect(() => {
    if (id) {
      dispatch({ type: VIEW_CLIENTS_DETAILS, payload: id });
    }
  }, []);
  const getdteformate = (date) => {
    return (date = moment(date).format("DD-MM-YYYY"));
  };

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="client">
          <div className="clientWrapper">
            <NavLink exact to="/admin/client" className="link">
              <span style={{ fontWeight: "bold" }}>Cient Details</span>
            </NavLink>
          </div>
          <div className="clientmain">
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6
                        className="card-title mb-0"
                        style={{ fontWeight: "bold" }}
                      >
                        {ViewClientData?.companyName}
                      </h6>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <b>Client ID</b>
                              </td>
                              <td>{ViewClientData?.id}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Company Name</b>
                              </td>
                              <td>{ViewClientData?.companyName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Client LinkedIn</b>
                              </td>
                              <td>{ViewClientData?.clientlinkedin}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Comments</b>
                              </td>
                              <td>{ViewClientData?.clientcomments}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Web Site</b>
                              </td>
                              <td>{ViewClientData?.website}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Client Contacts</b>
                              </td>
                              <td>{ViewClientData?.phone}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Priority</b>
                              </td>
                              <td>{priorityFun(ViewClientData?.priority)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-6">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <b>Name</b>
                              </td>
                              <td>{ViewClientData?.clientname}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Create Date</b>
                              </td>
                              <td>
                                {getdteformate(ViewClientData?.createdAt)}
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <b>Email ID</b>
                              </td>
                              <td>{ViewClientData?.email}</td>
                            </tr>
                            <tr>
                              <td>
                                <b> Company LinkedIn </b>
                              </td>
                              <td>{ViewClientData?.linkdinProfile}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Location</b>
                              </td>
                              <td>{ViewClientData?.location}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Client Project</b>
                              </td>
                              <td>
                                {ViewClientData?.clientprojects &&
                                  ViewClientData?.clientprojects.map((item) => {
                                    return <>{item.project.projectname},</>;
                                  })}
                                {/* {ViewClientData?.clientprojects[0]} */}
                              </td>
                            </tr>
                            <tr>
                              {/* <td>
                                                        <b>Status</b>
                                                    </td>
                                                    <td>
                                                        {ViewClientData?.status}
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
      )}
    </>
  );
}
