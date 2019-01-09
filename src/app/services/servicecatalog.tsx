import * as React from 'react';
import ServiceManager from '../services/servicemanager';

interface ServiceCatalogProps {

}
export default class ServiceCatalog extends React.Component<ServiceCatalogProps, any>{

    constructor(props) {
        super(props);
        this.state = {
            selectedService: null
        }
        this.serviceChanged = this.serviceChanged.bind(this);
    }

    serviceChanged(service?) {
        this.setState({ selectedService: service })
    }


    render() {
        let content;
        if (!this.state.selectedService) {
            content = <ServiceCatalogList onChange={this.serviceChanged} {...this.props} />
        }
        if (this.state.selectedService) {
            content = <ServiceManager onChange={this.serviceChanged} type={this.state.selectedService} />
        }
        return <div className="service-catalog">
            {content ? content : ""}
            <button>Validate</button>
        </div>
    }
}


interface ServiceCatalogListProps {
    onChange: (res?: any) => void;
}

export class ServiceCatalogList extends React.Component<ServiceCatalogListProps, any>{

    render() {
        let services;
        const catalog = require('../services/services.json');
        if (catalog && catalog.services && catalog.services.length) {
            services = catalog.services.map((s, i) => {
                return <CatalogItem onChange={this.props.onChange} item={s} key={i} />
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
}

class CatalogItem extends React.Component<CatalogItemProps, any>{

    render() {
        return <div onClick={() => this.props.onChange(this.props.item.id)} className="catalog-item">
            {this.props.item.id}
        </div>;
    }
}