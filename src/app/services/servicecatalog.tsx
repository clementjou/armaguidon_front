import * as React from 'react';
import Popover from '../popover/index';
import ServiceManager from '../services/servicemanager';

interface ServiceCatalogListProps {

}

export default class ServiceCatalogList extends React.Component<ServiceCatalogListProps, any>{

    render() {
        let services;
        const catalog = require('../services/services.json');
        if (catalog && catalog.services && catalog.services.length) {
            services = catalog.services.map((s, i) => {
                return <CatalogItem item={s} key={i} />
            })
        }
        return <div className="catalog-list">
            {services}
        </div>
    }
}


interface CatalogItemProps {
    item: any;
}

class CatalogItem extends React.Component<CatalogItemProps, any>{
    constructor(props) {
        super(props);
        this.editService = this.editService.bind(this);
        this.state={
            showPopover: false
        }
    }
    onClose() {

    }

    editService() {
        this.setState({showPopover: true})
    }

    render() {
        let props = {
            type: this.props.item.id
        }
        return <div className="catalog-item">
            <button onClick={() => this.editService()}></button>
            {this.props.item.id}
            {this.state.showPopover ? <Popover onClose={this.onClose} component={ServiceManager} customProps={props} />: null}
        </div>;
    }
}