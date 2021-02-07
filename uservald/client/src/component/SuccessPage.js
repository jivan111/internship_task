import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";
import Grid from "@material-ui/core/Grid";
function SuccessPage({ history, isRegistered }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState([true]);
  console.log("users", users);
  if (!isRegistered) {
    history.push("/register");
  }
  useEffect(() => {
    axios
      .get("/alluser")
      .then((res) => {
        console.log(res);
        setUsers([...users, ...res.data]);
        setLoading(!loading);
      })
      .catch((err) => {
        setLoading(!loading);
        setError(true);
        console.log("oops something went wrong");
      });
  }, []);
  return (
    <div
      style={{
        maxWidth: "80%",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={3}>
          {users.length > 0 ? (
            users.map((user, index) => <Card key={index} user={user} />)
          ) : !error ? (
            <h1 style={{ color: "white", textAlign: "center" }}>
              No Users Found!
            </h1>
          ) : (
            <h1 style={{ color: "white", textAlign: "center" }}>
              Oops Something went wrong!!
            </h1>
          )}
        </Grid>
      )}
    </div>
  );
}
export default SuccessPage;
