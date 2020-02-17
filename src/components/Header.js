import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  linkcolor: {
    color: '#fff',
    marginLeft: 20,
  }
}));

function Header() {
    const classes = useStyles();
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              GHI React
            </Typography>
            <Link href="/" className={classes.linkcolor}>Home</Link>
            <Link href="/document" className={classes.linkcolor}>Docs</Link>
            <Link href="/about" className={classes.linkcolor}>About</Link>
            <Link href="/dashboard" className={classes.linkcolor}>Dashboard</Link>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Header;