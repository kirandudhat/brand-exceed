import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    background: "#444444 !important",
    padding: "10px 15px",
    borderRadius: "10px", 
    color: "#ffffff",
    height:"fit-content",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'

  }
}));