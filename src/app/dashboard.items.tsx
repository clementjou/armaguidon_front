import * as React from 'react';
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
    render() {
        return <div className="dashboard-item">
            <p>{this.props.name}</p>
            {this.props.isEmpty ? <p className="add-item">+</p> : ""}
        </div>
    }
}