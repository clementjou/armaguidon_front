import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { AppMenu } from '../menu';



export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
        }

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu(arg) {
        this.setState({ anchorEl: arg ? arg.target : null })
    }


    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);


        const renderMenu = <AppMenu anchorEl={anchorEl} isMenuOpen={isMenuOpen} />


        return <div className="header-container">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton onClick={this.openMenu} className="menu-icon" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        {this.props.username ? this.props.username.toUpperCase() : ""}
                    </Typography>

                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    }
}