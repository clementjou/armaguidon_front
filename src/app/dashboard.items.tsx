import * as React from 'react';
import Popover from './popover/index';
import ServiceCatalog from './services/servicecatalog';
//Passer en LESS
import './dashboard.items.css';
import { ServiceEditorManager } from './services/serviceeditormanager';
import { ServiceManager } from './services/servicemanager';

//Implémenter en base
export class MainDashboardItems extends React.Component<any, any> {
    items = []
    constructor(props) {
        super(props);
        this.itemChanged = this.itemChanged.bind(this);
        this.items.push(
            {
                type: "weather",
                name: "Lorem pimpum",
                config: {

                }
            },
            {
                type: "news",
                name: "salut toi",
                config: {

                }
            }
        )
    }


    itemChanged(arg) {
        if (arg) {
            this.items.push(arg)
            this.setState({ items: this.items })
        }
    }

    render() {
        let renderItems = null;

        if (this.items && this.items.length) {
            renderItems = this.items.map((item) => {
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

    onCompleted(arg?) {
        this.setState({ showPopover: false });
        if (arg) {
            this.props.onChange(arg);
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