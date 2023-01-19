import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import Datatable from "../../Components/DataTables/Datatable"
import { getUser } from "../../Utils/common/Common"
import apiClient from "../../services/axois/index";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveAsTwoToneIcon from '@mui/icons-material/SaveAsTwoTone';
import '../Theme/themeStyle.css'
import { HOLIDAY_LIST } from "../../redux/holidayListing/types"
import { useDispatch, useSelector } from "react-redux"
const Theme = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [userList, setUserList] = useState([])
    const themeList = useSelector((state) => state.holidayListReducer.holidayList)
    useEffect(()=>{
        dispatch({ type: HOLIDAY_LIST });
    },[])
    useEffect(()=>{
      setUserList(themeList)
    },[themeList])
    const handleDelete = async(id) => {
        await apiClient.get(`theme/delete/${id}`).then((response) => {

        })
        let deleteId = userList.filter((i)=>i.id !== id)
        setUserList(deleteId)
    }
    const columns = [
     
        {
          field: "theme_name",
          headerName: "Name",
          flex: 3,
          width: 60,
          renderCell: ({ row }) => {
            return <p className="table-column">{row.theme_name}</p>;
          },
        },
        {
          field: "layout_type",
          headerName: "Layout Type",
          flex: 2,
          width: 30,
          renderCell: ({ row }) => {
            return <p className="table-column">{row.layout_type}</p>;
          },
        },
        
        {
          field: "",
          headerName: "Edit/Delete",
          flex: 1.5,
          width: 10,
          renderCell: ({ row }) => {
            return (
            <div>
                <span style={{color:'#656565', marginRight: '5px', cursor:'pointer'}} onClick={() => history.push(`/themes/add-edit-themes?id=${row.id}`)}><SaveAsTwoToneIcon /></span>
                <span style={{color:'#656565', cursor:'pointer'}} onClick={()=> handleDelete(row.id)}><DeleteOutlineIcon /></span>
            </div>
            )
          },
        },
       
      ];

    return(
        <>
          <div className="containt">
            <div className="containt-data">
                <h3>Themes
                <div className="grp-btn">
                    <Button className="help-btn">
                        Help
                    </Button>
                    <Button className="add-user" onClick={()=>history.push('/themes/add-edit-themes')}>
                        Add Theme
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
export default Theme