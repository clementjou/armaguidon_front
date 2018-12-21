import React, { Component } from 'react';
import Header from './app/header'
import AppRoutes from './app/approutes';

export class AppShell extends React.Component {
    render() {
        return <div className="appshell-container">
            <Header username={this.props.match && this.props.match.params && this.props.match.params.userId} />
            <AppRoutes match={this.props.match} />
        </div>
    }
}