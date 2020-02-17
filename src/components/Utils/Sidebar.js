import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Link from '@material-ui/core/Link'

function Sidebar(props) {
  return(
    <div className="sidebar">
        <List disablePadding dense>
            {props.routedata.map((route,index) => (
                <ListItem button key={index}>
                    <Link href={route.path}>{route.linkName}</Link>
                </ListItem>
            ))}
        </List>
    </div>
  );
}

export default Sidebar;