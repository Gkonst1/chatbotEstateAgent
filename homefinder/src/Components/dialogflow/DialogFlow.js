import React from 'react';
import  '../dialogflow/Dialogflow.scss';

class DialogFlow extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className='dialogflow'>
            <iframe
                    allow="microphone;"
                    width="350"
                    height="430"
                    src="https://console.dialogflow.com/api-client/demo/embedded/d23f919f-ff50-456a-942b-84632b9b940f">
                </iframe>
            </div>
            </React.Fragment>
        )
    }
}

export default DialogFlow