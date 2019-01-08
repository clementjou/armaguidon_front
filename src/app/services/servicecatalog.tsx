import * as React from 'react';

interface ServiceCatalogListProps{

}

export default class ServiceCatalogList extends React.Component<ServiceCatalogListProps, any>{

    render(){
        let services;
        const catalog = require('../services/services.json');
        if(catalog && catalog.services && catalog.services.length){
            services = catalog.services.map((s, i)=>{
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

class CatalogItem extends React.Component<CatalogItemProps,any>{
    render(){
        return <div className="catalog-item">
            {this.props.item.id}
        </div>;
    }
}