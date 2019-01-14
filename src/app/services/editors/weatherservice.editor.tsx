import * as React from 'react';


interface WeatherServiceEditorProps {

}

export class WeatherServiceEditor extends React.Component<WeatherServiceEditorProps,any>{



    render(){
      
        return <div className="weather-service-editor">
            <input type="text"/>
            <input type="text"/>
        </div>
    }
}