import * as React from 'react';
import Popover from './popover/index';
import ServiceCatalogList from './services/servicecatalog';
//Passer en LESS
import './dashboard.items.css';

//Implémenter en base
export class MainDashboardItems extends React.Component<any, any> {
    render() {
        let renderItems = null;
        const items = [
            {
                type: "pouet",
                name: "Lorem pimpum",
                config: {

                }
            },
            {
                type: "salut",
                name: "salut toi",
                config: {

                }
            }
        ]

        if (items && items.length) {
            renderItems = items.map((item) => {
                return <MainDashboardItem type={item.type} name={item.name} config={item.config} />
            })
        }

        return <div className="dashboard-items">
            {renderItems}
            <MainDashboardItem isEmpty={true} />
        </div>
    }
}

// A séparer
class MainDashboardItem extends React.Component<any, any> {
    constructor(props){
        super(props);
        this.state={
            showPopover : false
        }
        this.onPopoverClose = this.onPopoverClose.bind(this);
    }

    onPopoverClose(arg?){
        this.setState({showPopover: false});
        if(arg){

        }
    }
    render() {
        let props = {
            a : "b"
        }
        return <div className="dashboard-item">
            <p>{this.props.name}</p>
            {this.props.isEmpty ? <p onClick={()=> this.setState({showPopover : true})} className="add-item">+</p> : ""}
            {this.state.showPopover ? <Popover onClose={this.onPopoverClose} component={ServiceCatalogList} customProps={props} /> : null}
        </div>
    }
}