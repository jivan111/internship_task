import React,{useEffect} from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import  Slide  from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
function TransitionLeft(props){
    return <Slide {...props} direction="left"/>
}
export default function CustomizedSnackbars({ state, message, type, closeSnack }) {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(state);
  }, [state]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    closeSnack();
    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        size="large"
      >
        <Alert elevation={6} variant="filled" severity={type}>
          {message}
          <Button
            onClick={handleClose}
            size="large"
            style={{
              maxWidth: "10px",
              borderRadius: "50%",
              height: "10px",
              color: "white",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
            endIcon={<CloseIcon />}
          ></Button>
        </Alert>
      </Snackbar>
    </div>
  );
}
