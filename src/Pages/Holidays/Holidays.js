import React from "react";

import { Button } from "react-bootstrap";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons//Delete";
// import { useParams } from "react-router-dom";
import "./Holidays.css";
import Datatable from "../../Components/DataTables/Datatable";

import { useDispatch, useSelector } from "react-redux";
import { HOLIDAY_LIST } from "../../redux/holidayListing/types";

import History from "../../Utils/History/History";
import AddHoliday from "./AddHoliday";
import { DELETE_HOLIDAY } from "../../redux/deteleHoliday/type";

import { getformattedDate } from "../../Utils/common/Common";

const Holidays = () => {
  const dispatch = useDispatch();

  const viewHoliday = useSelector(
    (state) => state.holidayListReducer.holidayList
  );
  const isLoading = useSelector(
    (state) => state.holidayListReducer.loading
  );

  React.useEffect(() => {
    dispatch({ type: HOLIDAY_LIST });
  }, []);

  const handleEditHoliday = (e, rid) => {
    e.preventDefault();

    History.push(`/admin/holidays/edit/${rid}`);
  };
  const handleDeleteHoliday = (rid) => {

    dispatch({ type: DELETE_HOLIDAY, payload: rid });
  };


  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "holiday_name",
      headerName: "Festival",
      type: "text",
      width: 200,
    },

    {
      field: "from_date",
      headerName: "From Date",
      type: "text",
      width: 300,
    },
    {
      field: "to_date",
      headerName: "To Date",
      type: "text",
      width: 300,
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
            onClick={(e) => handleEditHoliday(e, row.id)}
          >
            <EditIcon />
          </Button>

          <Button variant="contained" color="primary">
            <DeleteIcon onClick={() => handleDeleteHoliday(row.id)} />
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="holiday">
        <div className="holidayWrapper">
          <span style={{ fontWeight: "bold", fontSize:"25px" }}>HOLIDAYS FORM</span>
        </div>
        <div className="holidaymain shadow-none p-3 border mb-5">
          <AddHoliday />
        </div>

        <div className="holidayWrapper">
          <span style={{ fontWeight: "bold", fontSize:"25px" }}>HOLIDAYS DETAILS</span>
        </div>
        <div className="holidaymain shadow-none p-0">
  
  
          <Datatable column={columns} tableData={getformattedDate(viewHoliday)}  isLoading={isLoading}  />
        </div>
      </div>
    </>
  );
};

export default Holidays;
