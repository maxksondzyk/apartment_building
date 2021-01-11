import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div className="contacts-container"
                 style={{
                     display: 'flex',
                     justifyContent: 'center',
                     flexDirection: 'row',
                     flexGrow: 0,
                     flexBasis: 'auto',
                     flexShrink: 1,
                     flexWrap: 'nowrap',
                     flex: '0 1 auto',
                     alignItems: 'stretch',
                     margin: '0',
                     padding: '0',
                     width: 'auto',
                     height: 'auto',
                     maxWidth: 'none'
                 }}>
                <h1>
                    About
                </h1>
            </div>
        );
    }
}
