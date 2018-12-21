import React, { Component } from 'react';

export class Home extends React.Component{
    render(){
        return `Home de ${this.props.match.params.userId}`;
    }
}