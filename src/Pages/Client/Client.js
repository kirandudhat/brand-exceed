import React from "react";
import { NavLink } from "react-router-dom";
import Datatable from "../../Components/DataTables/Datatable";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Button } from "react-bootstrap";
import EditIcon from "@material-ui/icons/Edit";
import history from "../../Utils/History/History";

import "./Client.css";
import { useDispatch, useSelector } from "react-redux";
import { CLIENT_LIST } from "../../redux/clientListing/types";
import { VIEW_CLIENTS_DETAILS } from "../../redux/ViewClients/types";

const Client = () => {
  const dispatch = useDispatch();
  const viewClient = useSelector((state) => state.clientListReducer.clientList);
  const isLoading = useSelector((state) => state.clientListReducer.loading);
  React.useEffect(() => {
    dispatch({ type: CLIENT_LIST });
  }, []);

  const handleEditClients = (id) => {
    history.push(`/admin/client/edit/${id}`);
  };
  const handleViewClients = (id) => {
    history.push(`/admin/client/view/${id}`);
    dispatch({ type: VIEW_CLIENTS_DETAILS, payload: id });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 85 },
    {
      field: "clientname",
      headerName: "Client Name",
      width: 180,

      renderCell: ({ row }) => {
        // return <p>{row.name}</p>;
      },
    },

    {
      field: "companyName",
      headerName: "Company Name",
      type: "text",
      width: 200,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "text",
      width: 200,
      editable: true,
    },
    {
      field: "location",
      headerName: "Location",
      type: "text",
      width: 200,
      editable: true,
    },

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
            onClick={() => handleViewClients(row.id)}
          >
            <VisibilityIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditClients(row.id)}
          >
            <EditIcon />
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="client">
        <div className="clientWrapper">
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>
            CLIENT LIST
          </span>
          <NavLink to="/admin/client/add">
            <button className="btncolor" variant="contained" type="submit">
              ADD CLIENT
            </button>
          </NavLink>
        </div>
        <div className="clientmain shadow-none p-0">
          <Datatable
            column={columns}
            tableData={viewClient}
            isLoading={isLoading}
          />

          {/* <Datatable column={columns}/> */}
        </div>
      </div>
    </>
  );
};
export default Client;
