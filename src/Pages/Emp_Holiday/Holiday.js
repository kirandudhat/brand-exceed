import React from "react";
import "./Holiday.css";
import Datatable from "../../Components/DataTables/Datatable";
import { useDispatch, useSelector } from "react-redux";
import { HOLIDAY_LIST } from "../../redux/holidayListing/types";
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

  const columns = [
    { field: "id", headerName: "ID", width: 85 },
    {
      field: "holiday_name",
      headerName: "Festival",
      type: "text",
      width: 300,
      
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
  ];
  return (
    <>
      <div className="holiday">
        <div className="holidayWrapper">
          <span style={{ fontWeight: "bold", fontSize:"25px"  }}>HOLIDAYS DETAILS</span>
        </div>
        <div className="holidaymain shadow-none p-0">
          <Datatable column={columns} tableData={getformattedDate(viewHoliday)} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default Holidays;
