// import AddClient from "../../Pages/Client/AddClient";
// import Client from "../../Pages/Client/Client";
// import ViewClients from "../../Pages/Client/ViewClients";
import DashBoard from "../../Pages/Dashboard/Dashboard";
// import EmpDateWise from "../../Pages/EmployeeTimeSheet/EmpDateWise";
// import EmpMonthlysheet from "../../Pages/EmployeeTimeSheet/EmpMonthlysheet";
// import EmpTimeSheet from "../../Pages/EmployeeTimeSheet/EmpTimeSheet";
// import AddTimesheet from "../../Pages/Emp_AddTimeSheet/AddTimesheet";
// import LeaveDeatails from "../../Pages/Emp_LeaveDetails/LeaveDetails";
// import AddManualLeave from "../../Pages/AddManualLeave/AddManualLeave";
// import DateWiseTime from "../../Pages/Emp_TimeSheet/DateWiseTime";
// import MonthlyTimeSheet from "../../Pages/Emp_TimeSheet/MonthlyTimeSheet";
// import Holidays from "../../Pages/Holidays/Holidays";
// import Leave from "../../Pages/LeaveDeatails/Leave";
// import FormikForm from "../../Pages/OurEmployee/FormikForm";
// import OurEmployee from "../../Pages/OurEmployee/OurEmployee";
// import ViewEmployee from "../../Pages/OurEmployee/ViewEmployee";
// import AddProject from "../../Pages/Projects/AddProjects";
// import Project from "../../Pages/Projects/Project";
// import ViewProjects from "../../Pages/Projects/ViewProjects";
// import Holiday from "../../Pages/Emp_Holiday/Holiday";
// import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import HomeWorkIcon from "@material-ui/icons/HomeWork";
// import WeekendIcon from "@material-ui/icons/Weekend";
// // import GridViewIcon from "@material-ui/icons/GridView";
import GridViewIcon from "@mui/icons-material/GridView";
import StorageIcon from '@mui/icons-material/Storage';
// import BadgeIcon from "@mui/icons-material/Badge";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
// import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
// import LanguageIcon from "@mui/icons-material/Language";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import MoreTimeIcon from "@mui/icons-material/MoreTime";
// import OverTimeSheet from "../../Pages/Emp_OverTimeSheet/OverTimeSheet";
import Survey from "../../Pages/Survey/Survey";
import CreateSurvey from "../../Pages/Survey/CreateSurvey";
import CreateSurveyForm from "../../Pages/Survey/CreateSurveyForm";
import { Layers, MenuBook, Person } from "@material-ui/icons";
import Data from "../../Pages/data/data";
import Theme from "../../Pages/Theme/Theme";
import Users from "../../Pages/users/Users";
import SurveyResponse from "../../Pages/Survey/SurveyResponse";
import Responses from "../../Components/SurveyPage/Responses";
import AddUserForm from "../../Pages/users/AddUserForm";
import AddThemeForm from "../../Pages/Theme/AddThemeForm";


export const navLinks = [
  { to: "/", name: "DashBoard", permission: [1, 2, 3, 4,5], icon: <GridViewIcon /> },
  { to: "/survey", name: "Survey", permission: [1, 2, 3, 4,5], icon: <MenuBook /> },
  { to: "/data", name: "Data", permission: [1, 2, 3, 4,5], icon: <StorageIcon /> },
  { to: "/company", name: "Company", permission: [1], icon: <Person /> },
  { to: "/users", name: "Users", permission: [1, 2,3,4], icon: <Person /> },
  { to: "/themes", name: "Themes", permission: [1, 2,3,4], icon: <Layers /> },
  
];

export const routes = [
  {
    path: "/",
    name: "DashBoard",
    permission: [1, 2, 3,4,5],
    component: <DashBoard />,
  },
  {
    path: "/survey",
    name: "Survey",
    permission: [1, 2, 3,4,5],
    component: <Survey />,
  },
  {
    path: "/survey/createsurvey",
    name: "CreateSurvey",
    permission: [1, 2, 3,4],
    component: <CreateSurvey />,
  },
  {
    path: "/survey/CreateSurveyForm",
    name: "CreateSurveyForm",
    permission: [1, 2, 3, 4],
    component: <CreateSurveyForm />,
  },
  {
    path: "/data",
    name: "Data",
    permission: [1, 2, 3, 4,5],
    component: <Data />,
  },
  {
    path: "/users",
    name: "Users",
    permission: [1, 2, 3, 4],
    component: <Users />,
  },
  {
    path: "/company",
    name: "Company",
    permission: [1],
    component: <Users />,
  },
  {
    path: "/themes",
    name: "Themes",
    permission: [1, 2, 3, 4],
    component: <Theme />,
  },
  {
    path: "/themes/add-edit-themes",
    name: "AddEditThemes",
    permission: [1, 2, 3, 4],
    component: <AddThemeForm />,
  },
  {
    path: "/Suveyresponse",
    name: "surveyResponse",
    permission: [1, 2, 3, 4, 5],
    component: <Responses />,
  },
  {
    path: "/company/add-edit-User",
    name: "AddUser",
    permission: [1],
    component: <AddUserForm />,
  },
  {
    path: "/users/add-edit-User",
    name: "AddUser",
    permission: [1, 2, 3, 4],
    component: <AddUserForm />,
  }
];

export const getByRoleRoutes = (role) =>{
  return routes.filter((route) => route.permission.includes(role));}

export const getBasePath = (role) => {

  let basePath = "";

  // if (role === 1) {
  //   basePath = "/admin";
  // }

  return basePath;
};

export const getPath = (path, basePath) => {
  let newPath = path;

  if (path === "") {
    newPath = "";
  } else if (path === "/" && basePath !== "") {
    // Removing / in the end of dashboard url
    newPath = path;
  } else {
    newPath = path;
  }

  return newPath;
};
