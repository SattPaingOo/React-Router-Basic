import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid
        container spacing={3}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>Welcome From GHI React</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>What is React?</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Why React?</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Use State</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Using Redux</Paper>
        </Grid>
      </Grid>
      </div>
    );
}

export default Home;