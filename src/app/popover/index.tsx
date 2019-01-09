import * as React from 'react';
import * as ReactDom from 'react-dom';
import './popover.css';

interface PopoverProps {
    component: any;
    customProps: any;
    onCompleted: (res?: any) => void;
    actions?: any[];
    title?: string;
}
export default class Popover extends React.Component<PopoverProps, any>{
    render() {
        return <div className="popover-overlay">
            <div className="popover-container">
                <PopoverContent title={this.props.title} onCompleted={this.props.onCompleted} component={this.props.component} customProps={this.props.customProps} />
                {this.props.actions ? <PopoverActions actions={this.props.actions} /> : null}
            </div>
        </div>
    }
}

interface PopoverContentProps extends PopoverProps {
}

class PopoverContent extends React.Component<PopoverContentProps, any>{

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleClickOutside(e) {
        const node = ReactDom.findDOMNode(this);
        if (node && !node.contains(e.target)) {
            this.props.onCompleted(null);
        }

    }

    componentDidMount() {
        //document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        return <div className="popover-content">
            <div className="popover-header">
                <h2>{this.props.title ? this.props.title : ""}</h2>
                <span onClick={()=> this.props.onCompleted(null)}>X</span>
            </div>
            {React.createElement(this.props.component, this.props.customProps)}
        </div>
    }
}

interface PopoverActionsProps {
    actions: any[];
}
class PopoverActions extends React.Component<PopoverActionsProps, any>{
    render() {
        let actions;
        if (this.props.actions && this.props.actions.length) {
            actions = this.props.actions.map((action, i) => {
                return <button disabled={action.disabled} key={i} className={"popover-action-button " + action.isImportant ? "important" : ""} onClick={action.callback}>{action.name}</button>
            })
        }
        return <div className="popover-actions">
            {actions}
        </div>
    }
}