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

export default function Cards({ clubs }) {
  const { club, city, league } = clubs;
  //   const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={6} md={6}>
        <Card variant="outlined">
          <CardContent>
            {club && (
              <Typography variant="h2" gutterBottom>
                {club}
              </Typography>
            )}
            {city && (
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {city}
              </Typography>
            )}
            {league && (
              <Typography gutterBottom color="textSecondary">
                {league}
              </Typography>
            )}
            {/* <Typography variant="body2" gutterBottom color="textSecondary">
              {user.dob.day} {user.dob.month} {user.dob.year}
            </Typography> */}
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}
