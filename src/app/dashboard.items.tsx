import * as React from 'react';
import Popover from './popover/index';
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
    }
    render() {
        let props = {
            a : "b"
        }
        return <div className="dashboard-item">
            <p>{this.props.name}</p>
            {this.props.isEmpty ? <p onClick={()=> this.setState({showPopover : true})} className="add-item">+</p> : ""}
            {this.state.showPopover ? <Popover component={Coucou} props={props} /> : null}
        </div>
    }
}

class Coucou extends React.Component<any,any>{
    render(){
        return <div className="coucou">
            salut
        </div>
    }
}