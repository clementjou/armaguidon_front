import * as React from 'react';

interface NewsServiceEditorProps {

}

export class NewsServiceEditor extends React.Component<NewsServiceEditorProps,any>{
    render(){
        return <div className="news-service-editor">
            <input type="text"/>
            <input type="text"/>
        </div>
    }
}