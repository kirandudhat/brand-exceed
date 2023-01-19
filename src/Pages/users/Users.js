import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import Datatable from "../../Components/DataTables/Datatable"
import { getUser } from "../../Utils/common/Common"
import apiClient from "../../services/axois/index";
import EditIcon from "@material-ui/icons/Edit";
import { CLIENT_LIST } from "../../redux/clientListing/types"
import { useDispatch, useSelector } from "react-redux"

const Users = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const clientList = useSelector((state) => state.clientListReducer.clientList);
    const [userList, setUserList] = useState([])
    useEffect(()=>{
      dispatch({ type: CLIENT_LIST });
    },[])
    useEffect(()=>{
      setUserList(clientList)
    },[clientList])
    const columns = [
        {
          field: "id",
          headerName: "#",
          flex: 0.5,
          width: 10,
          renderCell: ({ row }) => {
            return ( <>
            <Button
              className="iconbtn"
              variant="contained"
              color="primary"
                onClick={()=>window.location.pathname.includes('users') ? history.push(`/users/add-edit-User?id=${row.id}`) : history.push(`/company/add-edit-User?id=${row.id}`)}
            >
              <EditIcon className="iconstyl" />
            </Button>
          </>)
          },
        },
        {
          field: "name",
          headerName: "Name",
          flex: 1.2,
          width: 30,
          renderCell: ({ row }) => {
            return <p className="pstyl">{row.name}</p>;
          },
        },
        {
          field: "username",
          headerName: "User name",
          flex: 1.3,
          width: 40,
          renderCell: ({ row }) => {
            return <p className="table-column">{row.username}</p>;
          },
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1.5,
          width: 50,
          renderCell: ({ row }) => {
            return <p className="table-column">{row.email}</p>;
          },
        },
        {
          field: "role",
          headerName: "Role",
          flex: 2,
          width: 30,
          renderCell: ({ row }) => {

            let finsRoles = JSON.parse(row.role)

            return <div className="table-column" style={{fontSize: 12, textAlign: 'initial', fontWeight:550}}>
              { finsRoles && finsRoles.map((i)=>{
                return(
                  <p style={{lineHeight: '12px'}}>{i == 2 ? 'Company' : i == 3 ? 'Survey Manager': i == 4 ? 'Survey Creator' : i == 5 ? 'Data Viewer' : i == 6 ? 'Data Collector' : "" }</p> 
                )
              })}
            </div>;
          },
        },
        {
          field: "status",
          headerName: "Status",
          flex: 1.5,
          width: 30,
          renderCell: ({ row }) => {
            return <p className="table-column"><span className="table-column_span" style={{background: row.status == 0 ? 'red' : '#27c24c'}}>{row.status == 0 ? 'Inactive' : 'Active'}</span></p>;
          },
        },
       
      ];

    return(
        <>
          <div className="containt">
            <div className="containt-data">
                <h3>{window.location.pathname.includes('users')? 'Users' : 'Company'}
                <div className="grp-btn">
                    <Button className="help-btn">
                        Help
                    </Button>
                    {/* <Button className="addMultiple">
                        Add Multiple Users
                    </Button> */}
                    <Button className="add-user" onClick={()=>window.location.pathname.includes('users')? history.push('/users/add-edit-User') : history.push('/company/add-edit-User')}>
                    {window.location.pathname.includes('users')? 'Add User' : 'Add Company'}
                    </Button>
                </div>
                </h3>
                <div style={{marginTop: '10px', padding: '10px'}}>
                <Datatable
                 column={columns}
                 tableData={userList}
                />
                </div>
            </div>
        </div>
        </>
    )
}
export default Users