import * as React from 'react';
import {ServiceManager} from '../services/servicemanager';
import Button from '@material-ui/core/Button';

import './servicecatalog.css';

interface ServiceCatalogProps {
    onCompleted: (res?) => void
}
export default class ServiceCatalog extends React.Component<ServiceCatalogProps, any>{

    constructor(props) {
        super(props);
        this.state = {
            selectedService: null,
            showServiceDetail: null
        }
        this.serviceChanged = this.serviceChanged.bind(this);
    }

    serviceChanged(service?) {
        if (service) {
            this.setState({ item : service, showServiceDetail: true });
        }
    }



    render() {
        let content, backButton;
        if (!this.state.selectedService || !this.state.showServiceDetail) {
            content = <ServiceCatalogList selectedService={this.state.selectedService} onChange={this.serviceChanged} {...this.props} />
        }
        if (this.state.item && this.state.item.type && this.state.showServiceDetail) {
            content = <ServiceManager item={this.state.item} onChange={this.serviceChanged} type="editor" />
        }
        return <div className="service-catalog">
            {content ? content : ""}
            <div className="control-buttons">
                <Button disabled={!this.state.showServiceDetail} variant="contained" onClick={() => this.setState({ showServiceDetail: false })}>Back</Button>
                <Button variant="contained" color="primary" disabled={!this.state.item} onClick={() => this.props.onCompleted(this.state.item)}>Validate</Button>
            </div>
        </div>
    }
}


interface ServiceCatalogListProps {
    onChange: (res?: any) => void;
    selectedService: string;
}

export class ServiceCatalogList extends React.Component<ServiceCatalogListProps, any>{

    constructor(props) {
        super(props);
    }

    render() {
        let services;
        const catalog = require('../services/services.json');
        if (catalog && catalog.services && catalog.services.length) {
            services = catalog.services.map((s, i) => {
                return <CatalogItem selected={this.props.selectedService == s.id} onChange={this.props.onChange} item={s} key={i} />
            })
        }
        return <div className="catalog-list">
            {services}
        </div>
    }
}


interface CatalogItemProps {
    onChange: (res?: any) => void;
    item: any;
    selected: boolean;
}

class CatalogItem extends React.Component<CatalogItemProps, any>{

    render() {
        return <div onClick={() => this.props.onChange({type : this.props.item.id})} className={"catalog-item " + (this.props.selected ? "selected" : "")}>
            {this.props.item.id}
        </div>;
    }
}