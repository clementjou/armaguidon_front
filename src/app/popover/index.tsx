import * as React from 'react';
import * as ReactDom from 'react-dom';
import './popover.css';

interface PopoverProps{
    component: any;
    customProps: any;
    onClose: (res?: any) => void;
}
 export default class Popover extends React.Component<PopoverProps, any>{
    render() {
        return <div className="popover-overlay">
            <div className="popover-container">
            <PopoverContent onClose={this.props.onClose} component={this.props.component} customProps={this.props.customProps} />
            </div>
        </div>
    }
}

interface PopoverContentProps extends PopoverProps {
}

class PopoverContent extends React.Component<PopoverContentProps,any>{

    constructor(props){
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleClickOutside(e){
        const node = ReactDom.findDOMNode(this);
        if(node && !node.contains(e.target)){
            this.props.onClose(null);
        }

    }
    
    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render(){
        return <div className="popover-content">
            {React.createElement(this.props.component, this.props.customProps)}
        </div>
    }
}