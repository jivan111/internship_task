import React from "react";
import Club from "./Cards";
import Grid from "@material-ui/core/Grid";
function Body({data }) {
  console.log(data)
  const {clubs,loadData}=data;
  return (
    <div className="body" onScroll={(e)=>{
    
       if(e.target.scrollTop+50>e.target.scrollHeight-e.target.clientHeight) {
         loadData(e);
       }
    }}>
      <Grid container spacing={3}>
        {/* {JSON.stringify(clubs)} */}
        {clubs.map((club, index) => (
          <Club clubs={club} key={index} />
        ))}
      </Grid>
    </div>
  );
}
export default Body;
