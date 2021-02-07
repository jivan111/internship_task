// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: theme.spacing(1),
//       width: theme.spacing(32),
//       height: theme.spacing(22),
//     },
//   },
//   title:{
//       fontSize:"16",
//       padding:"3"
//   }
// }));

// export default function Card() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Paper elevation={10}>
//         <Typography
//           className={classes.title}
//           color="textSecondary"
//           padding="3"
//           gutterBottom
//         >
//           Word of the Day
//         </Typography>
//       </Paper>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: "1.4rem",
    },
    body2: {
      fontSize: "1.1rem",
    },
  },
});
// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     maxWidth: 360,
//   },
// });

export default function Cards({ user }) {
//   const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
         <Grid item xs={12} sm={6} md={4}>
      <Card  variant="outlined">
        <CardContent>
          <Typography variant="h2" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {user.email}
          </Typography>
          <Typography gutterBottom color="textSecondary">
            {user.phone}
          </Typography>
          <Typography variant="body2" gutterBottom color="textSecondary">
            {user.dob.day} {user.dob.month} {user.dob.year}
          </Typography>
        </CardContent>
      </Card>
     </Grid>
    </ThemeProvider>
  );
}
