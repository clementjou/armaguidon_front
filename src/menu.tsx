import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';




export class AppMenu extends React.Component<any,any> {


    render() {
        return <Menu
            anchorEl={this.props.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={this.props.isMenuOpen}>

            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
        </Menu>
    }
}