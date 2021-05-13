import React from 'react';
import './messageItem.css';

export default ({data}) => {
    return (
        <div className="messageLine"
        style = {{
            justifyContent: 'flex-start'   
        }}
        >
           
            <div className="messageItem">
             <div className="messageText">{data.body}</div>
             <div className="messageDate">10:08</div>   
            </div>
        </div>
    );
}