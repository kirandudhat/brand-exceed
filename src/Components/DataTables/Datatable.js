import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { DataGrid } from "@mui/x-data-grid";
// import { useDemoData } from "@material-ui/x-data-grid-generator";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(0.5, 0.5, 0),
      justifyContent: "space-between",
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
    textField: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      margin: theme.spacing(1, 0.5, 1.5),
      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(0.5),
      },
      "& .MuiInput-underline:before": {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  }),
  { defaultTheme }
);

function QuickSearchToolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {/* <GridToolbarFilterButton /> */}
        {/* <GridToolbarDensitySelector /> */}
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default function Datatable({ column, tableData = [], isLoading }) {
  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState();
  const [pageSize, setPageSize] = React.useState(5);
  

  // React.useEffect(() => {
  //   if (tableData) {
  //     setRows(tableData);
  //   }
  // }, [rows, tableData]);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = tableData.filter((row) => {
      return Object.keys(row).some((field) => {
        return row[field] ? searchRegex.test(row[field].toString()) : false;
      });
    });
    setRows(filteredRows);
  };

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div style={{ height: "600px" }}>
          <DataGrid
            components={{
              Toolbar: QuickSearchToolbar,
              NoRowsOverlay: () => (
                <div
                  style={{
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  No Releated Data found.
                </div>
              ),
            }}
            rows={rows ? rows : tableData ? tableData : []}
            columns={column || []}
            disableSelectionOnClick={true}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            disableColumnMenu={true}
            componentsProps={{
              toolbar: {
                value: searchText,
                onChange: (event) => requestSearch(event.target.value),
                clearSearch: () => requestSearch(""),
              },
            }}
          />
        </div>
      )}
    </>
  );
}
