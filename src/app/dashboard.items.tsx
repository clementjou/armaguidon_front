import * as React from 'react';
import Popover from './popover/index';
import ServiceCatalog from './services/servicecatalog';
//Passer en LESS
import './dashboard.items.css';
import { ServiceEditorManager } from './services/serviceeditormanager';
import { ServiceManager } from './services/servicemanager';
import {SetNewDashboardItem, getDashboardItems, DeleteDashboardItem, UpdateDashboardItem} from '../api/api';
import * as lodash from 'lodash';

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
        this.initItems()
    }

    initItems(){
        getDashboardItems(this.props.userId).then((dashboardItems)=>{
            if(dashboardItems && dashboardItems.length){
                this.setState({dashboardItems});
            }
        })
    }


    itemChanged(arg, deleteItem?, updateItem?) {
        
        if (arg) {
            let dashboardItems = lodash.assign([], this.state.dashboardItems);
            if(deleteItem){
                DeleteDashboardItem(arg.itemId).then(()=>{
                    this.initItems();
                })
            }else if(updateItem){
                UpdateDashboardItem(arg).then(()=>{
                    this.initItems();
                });
            }else{
                SetNewDashboardItem(arg).then(()=>{
                    this.initItems();
                })
                //const item = lodash.assign({}, arg);
                //dashboardItems.push(item);
            }
            this.setState({ dashboardItems })
        }
    }

    render() {
        let renderItems = null;

        if (this.state.dashboardItems && this.state.dashboardItems.length) {
            renderItems = this.state.dashboardItems.map((item) => {
                if(item && item.config && typeof item.config == "string"){
                    item.config = JSON.parse(item.config as string);
                }
                if(item.config && item.config.location){
                    return <MainDashboardItem onChange={this.itemChanged} item={item} />
                }else{
                    return;
                }
                
            })
        }

        return <div className="dashboard-items">
            {renderItems}
            <MainDashboardAddItem userId={this.props.userId} onChange={this.itemChanged} isEmpty={true} />
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

    onCompleted(arg?, deleteItem?, updateItem?) {
        this.setState({ showPopover: false });
        if (arg) {
            this.props.onChange(arg, deleteItem, updateItem);
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
            onCompleted: this.onCompleted,
            userId: this.props.userId
        }

        return <div className="dashboard-item size-S">
            <p>{this.props.item && this.props.item.name}</p>
            <p onClick={() => this.setState({ showPopover: true })} className="add-item">+</p>
            {this.state.showPopover ? <Popover title="Choix de services" onCompleted={this.onCompleted} component={ServiceCatalog} customProps={props} /> : null}
        </div>
    }
}