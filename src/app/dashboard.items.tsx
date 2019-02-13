import * as React from 'react';
import Popover from './popover/index';
import ServiceCatalog from './services/servicecatalog';
//Passer en LESS
import './dashboard.items.css';
import { ServiceEditorManager } from './services/serviceeditormanager';
import { ServiceManager } from './services/servicemanager';
import {SetNewDashboardItem, getDashboardItems} from '../api/api';

//Implémenter en base
export class MainDashboardItems extends React.Component<any, any> {
    items = []
    constructor(props) {
        super(props);
        this.itemChanged = this.itemChanged.bind(this);
        this.state={
            dashboardItems : null
        }
    }

    componentDidMount(){
        getDashboardItems(1).then((dashboardItems)=>{
            if(dashboardItems && dashboardItems.length){
                this.setState({dashboardItems});
            }
        })
    }


    itemChanged(arg, deleteItem?) {
        if (arg) {
            SetNewDashboardItem(arg);
            this.items.push(arg)
            this.setState({ items: this.items })
        }
        if(deleteItem){
            let item = this.items.indexOf(arg.id);
        }
    }

    render() {
        let renderItems = null;

        if (this.state.dashboardItems && this.state.dashboardItems.length) {
            renderItems = this.state.dashboardItems.map((item) => {
                return <MainDashboardItem onChange={this.itemChanged} item={item} />
            })
        }

        return <div className="dashboard-items">
            {renderItems}
            <MainDashboardAddItem onChange={this.itemChanged} isEmpty={true} />
        </div>
    }
}

// A séparer
class MainDashboardItem extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            showPopover: false
        }
        this.onCompleted = this.onCompleted.bind(this);
    }

    onCompleted(arg?, deleteItem?) {
        this.setState({ showPopover: false });
        if (arg) {
            this.props.onChange(arg, deleteItem);
        }
    }

    render() {
        let props = {
            onCompleted: this.onCompleted,
            item: this.props.item
        }

        return <div className="dashboard-item size-S">
            <div onClick={() => this.setState({ showPopover: true })} className="dashboard-item-content">
                <ServiceManager type="displayer" item={this.props.item} />
            </div>
            {this.state.showPopover ? <Popover title="Paramétres du service" onCompleted={this.onCompleted} component={ServiceEditorManager} customProps={props} /> : null}
        </div>
    }
}

class MainDashboardAddItem extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            showPopover: false
        }
        this.onCompleted = this.onCompleted.bind(this);
    }

    onCompleted(arg?) {
        this.setState({ showPopover: false });
        this.props.onChange(arg);
    }

    render() {
        let props = {
            onCompleted: this.onCompleted
        }

        return <div className="dashboard-item size-S">
            <p>{this.props.item && this.props.item.name}</p>
            <p onClick={() => this.setState({ showPopover: true })} className="add-item">+</p>
            {this.state.showPopover ? <Popover title="Choix de services" onCompleted={this.onCompleted} component={ServiceCatalog} customProps={props} /> : null}
        </div>
    }
}