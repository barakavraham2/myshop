import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid'
import { Link } from 'react-router-dom'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { getCategoris } from '../services/storeData'
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function AdminNav() {
    const [open, setOpen] = React.useState(false);
    const [categoris, setCategoris] = useState([])
    const handleClick = () => {
        setOpen(!open);
    };

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    useEffect(() => {
        getCategoris().then(res => { setCategoris(res) })
    }, [])

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });

    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key="1">
                    <Link to="/dashboard"><FontAwesomeIcon icon={Icons.faUser}></FontAwesomeIcon> Users Info</Link>
                </ListItem>
                <ListItem button key="2" >
                    <Link to="/addproduct"><FontAwesomeIcon icon={Icons.faNewspaper}></FontAwesomeIcon> Add Product</Link>
                </ListItem>
                <ListItem button key="3" onClick={handleClick} >
                    <FontAwesomeIcon icon={Icons.faEdit}>Edit Product</FontAwesomeIcon>
                    - Edit Product
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            categoris.map(category => {
                                return <ListItem button className={classes.nested} key={category.id} value={category.id}>
                                    <Link to={`/${category.name}`}>{category.name}</Link>
                                </ListItem>
                            })
                        }

                    </List>
                </Collapse>
            </List>
            <Divider />

        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>admin</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}