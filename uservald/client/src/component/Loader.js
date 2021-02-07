import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
function Loader() {
  return (
    <div style={style}>
      import CircularProgress from "@material-ui/core/CircularProgress";
    </div>
  );
}

export default Loader;
