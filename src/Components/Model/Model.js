import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DialogContentText from "@material-ui/core/DialogContentText";
import History from "../../Utils/History/History";
import { toast } from "react-toastify";
import {
  LEAVE_STATUS,
  REJECT_LEAVE_STATUS,
} from "../../redux/Approve_reject_leaves/type";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { removeUser } from "../../Utils/common/Common";

export default function Model({ id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [rejectvalue, setRejectValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleApproval = () => {
    dispatch({ type: LEAVE_STATUS, payload: { id: id } });
    setOpen(false);
  };
  const handleClick = () => {
    dispatch({ type: REJECT_LEAVE_STATUS, payload: { id, rejectvalue } });
    setOpen(false);
    handleClose();
  };
  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   setRejectValue(value);
  // };
  const handleKeyDown = (e) => {
    if (e.key === " " && rejectvalue.length === 0) {
      e.preventDefault();
    }
  };

  const handleLogout = () => {
    removeUser();
    History.push("/login");
    toast.success("Log Out Successfully");
  };

  return (
    <div>
      {id ? (
        <Button className="btn btn-dark btn-lg" onClick={handleClickOpen}>
          <VisibilityIcon />
        </Button>
      ) : (
        <Button
          className="btn btn-outline-greay my-2 my-sm-0"
          onClick={handleClickOpen}
        >
          <ExitToAppIcon />
        </Button>
      )}

      <Form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"></DialogTitle>
          {id ? (
            <DialogContent>
              <DialogContentText>
                Please enter the reason for approval/rejection here. This will
                be showed to the employee.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Responce Reject Leave"
                type="text"
                onKeyDown={handleKeyDown}
                fullWidth
                variant="filled"
                required
                // value={rejectvalue}
                onChange={(e) => setRejectValue(e.target.value)}
              />
            </DialogContent>
          ) : (
            <DialogContent>
              <DialogContentText>
                Do You Really Want To Log Out?
              </DialogContentText>
            </DialogContent>
          )}
          <DialogActions>
            {id ? (
              <>
                <Button
                  onClick={handleApproval}
                  disabled={rejectvalue.length}
                  color="primary"
                >
                  Approve
                </Button>
                <Button
                  type="submit"
                  disabled={!rejectvalue}
                  color="primary"
                  onClick={handleClick}
                >
                  Reject
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => handleLogout()} color="primary">
                  Yes
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  onClick={() => handleClose()}
                >
                  No
                </Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      </Form>
    </div>
  );
}
