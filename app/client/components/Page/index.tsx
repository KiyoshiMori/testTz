import React from 'react';

export default class Page extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div style={{display: 'flex', flex: '1', padding: '150px 0', justifyContent: 'center', alignItems: 'center'}}>
                {children}
            </div>
        )
    }
}