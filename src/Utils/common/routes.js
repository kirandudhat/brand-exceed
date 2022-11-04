import AddClient from "../../Pages/Client/AddClient";
import Client from "../../Pages/Client/Client";
import ViewClients from "../../Pages/Client/ViewClients";
import DashBoard from "../../Pages/Dashboard/Dashboard";
import EmpDateWise from "../../Pages/EmployeeTimeSheet/EmpDateWise";
import EmpMonthlysheet from "../../Pages/EmployeeTimeSheet/EmpMonthlysheet";
import EmpTimeSheet from "../../Pages/EmployeeTimeSheet/EmpTimeSheet";
import AddTimesheet from "../../Pages/Emp_AddTimeSheet/AddTimesheet";
import LeaveDeatails from "../../Pages/Emp_LeaveDetails/LeaveDetails";
import AddManualLeave from "../../Pages/AddManualLeave/AddManualLeave";
import DateWiseTime from "../../Pages/Emp_TimeSheet/DateWiseTime";
import MonthlyTimeSheet from "../../Pages/Emp_TimeSheet/MonthlyTimeSheet";
import Holidays from "../../Pages/Holidays/Holidays";
import Leave from "../../Pages/LeaveDeatails/Leave";
import FormikForm from "../../Pages/OurEmployee/FormikForm";
import OurEmployee from "../../Pages/OurEmployee/OurEmployee";
import ViewEmployee from "../../Pages/OurEmployee/ViewEmployee";
import AddProject from "../../Pages/Projects/AddProjects";
import Project from "../../Pages/Projects/Project";
import ViewProjects from "../../Pages/Projects/ViewProjects";
import Holiday from "../../Pages/Emp_Holiday/Holiday";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
// import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import WeekendIcon from "@material-ui/icons/Weekend";
// import GridViewIcon from "@material-ui/icons/GridView";
import GridViewIcon from "@mui/icons-material/GridView";
import BadgeIcon from "@mui/icons-material/Badge";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import LanguageIcon from "@mui/icons-material/Language";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import OverTimeSheet from "../../Pages/Emp_OverTimeSheet/OverTimeSheet";
import Survey from "../../Pages/Survey/Survey";
import CreateSurvey from "../../Pages/Survey/CreateSurvey";
import CreateSurveyForm from "../../Pages/Survey/CreateSurveyForm";

export const navLinks = [
  { to: "/", name: "DashBoard", permission: [1, 2], icon: <GridViewIcon /> },
  { to: "/survey", name: "Survey", permission: [1, 2], icon: <GridViewIcon /> },
  // {
  //   to: "/ouremployee",
  //   name: "Our Employees",
  //   permission: [1],
  //   icon: <BadgeIcon />,
  // },
  // {
  //   to: "/employeetimesheet",
  //   name: "Employee Timesheet",
  //   permission: [1],
  //   icon: <AccessTimeIcon />,
  // },
  // {
  //   to: "/leavedetails",
  //   name: "Leave Details",
  //   permission: [1],
  //   icon: <TimeToLeaveIcon />,
  // },
  // {
  //   to: "/addmanualleave",
  //   name: "Add Manual Leave",
  //   permission: [1],
  //   icon: <AddCircleOutlineIcon />,
  // },
  // {
  //   to: "/holidays",
  //   name: "Holidays",
  //   permission: [1],
  //   icon: <HolidayVillageIcon />,
  // },
  // { to: "/project", name: "Projects", permission: [1], icon: <LanguageIcon /> },
  // { to: "/client", name: "Clients", permission: [1], icon: <PeopleAltIcon /> },
  // {
  //   to: "/timesheetadd",
  //   name: "Add Timesheet",
  //   permission: [2],
  //   icon: <AddCircleOutlineIcon />,
  // },
  // {
  //   to: "/monthlytimesheet",
  //   name: "Timesheet",
  //   permission: [2],
  //   icon: <AccessTimeIcon />,
  // },
  // {
  //   to: "/overtimesheet",
  //   name: "Over Timesheet",
  //   permission: [2],
  //   icon: <MoreTimeIcon />,
  // },
  // {
  //   to: "/leave",
  //   name: "Leave Details",
  //   permission: [2],
  //   icon: <TimeToLeaveIcon />,
  // },
  // {
  //   to: "/holiday",
  //   name: "Holidays Details",
  //   permission: [2],
  //   icon: <WeekendIcon />,
  // },
];

export const routes = [
  {
    path: "/",
    name: "DashBoard",
    permission: [1, 2],
    component: <DashBoard />,
  },
  {
    path: "/survey",
    name: "Survey",
    permission: [1, 2],
    component: <Survey />,
  },
  {
    path: "/createsurvey",
    name: "CreateSurvey",
    permission: [1, 2],
    component: <CreateSurvey />,
  },
  {
    path: "/CreateSurveyForm",
    name: "CreateSurveyForm",
    permission: [1, 2],
    component: <CreateSurveyForm />,
  },
  { path: "/ouremployee", permission: [1], component: <OurEmployee /> },
  {
    path: "/ouremployee/viewemployee/:id",
    permission: [1],
    component: <ViewEmployee />,
  },
  { path: "/ouremployee/add", permission: [1], component: <FormikForm /> },
  {
    path: "/ouremployee/edit/:id",
    permission: [1],
    component: <FormikForm />,
  },
  { path: "/employeetimesheet", permission: [1], component: <EmpTimeSheet /> },
  {
    path: "/employeetimesheet/:id",
    permission: [1],
    component: <EmpMonthlysheet />,
  },
  {
    path: "/employeetimesheet/:id/datewise",
    permission: [1],
    component: <EmpDateWise />,
  },
  { path: "/leavedetails", permission: [1], component: <Leave /> },
  { path: "/addmanualleave", permission: [1], component: <AddManualLeave /> },
  { path: "/holidays", permission: [1], component: <Holidays /> },
  { path: "/holidays/edit/:id", permission: [1], component: <Holidays /> },
  { path: "/project", permission: [1], component: <Project /> },
  { path: "/project/add", permission: [1], component: <AddProject /> },
  { path: "/project/edit/:id", permission: [1], component: <AddProject /> },
  { path: "/project/view/:id", permission: [1], component: <ViewProjects /> },
  { path: "/client", permission: [1], component: <Client /> },
  { path: "/client/add", permission: [1], component: <AddClient /> },
  { path: "/client/view/:id", permission: [1], component: <ViewClients /> },
  { path: "/client/edit/:id", permission: [1], component: <AddClient /> },
  { path: "/timesheetadd", permission: [2], component: <AddTimesheet /> },
  {
    path: "/monthlytimesheet",
    permission: [2],
    component: <MonthlyTimeSheet />,
  },
  { path: "/monthly/dateWise", permission: [2], component: <DateWiseTime /> },
  { path: "/leave", permission: [2], component: <LeaveDeatails /> },
  { path: "/holiday", permission: [2], component: <Holiday /> },
  { path: "/overtimesheet", permission: [2], component: <OverTimeSheet /> },
  { path: "/profile/:id", permission: [2], component: <ViewEmployee /> },
  // { path: '', permission: [1, 2], component: <div>Not found</div> },
];

export const getByRoleRoutes = (role) =>
  routes.filter((route) => route.permission.includes(role));

export const getBasePath = (role) => {
  let basePath = "";

  if (role === 1) {
    basePath = "/admin";
  }

  return basePath;
};

export const getPath = (path, basePath) => {
  let newPath = path;

  if (path === "") {
    newPath = "";
  } else if (path === "/" && basePath !== "") {
    // Removing / in the end of dashboard url
    newPath = `${basePath}`;
  } else {
    newPath = `${basePath}${path}`;
  }

  return newPath;
};
