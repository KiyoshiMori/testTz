import React from 'react';

import styles from './styles.sass';

export default class Page extends React.Component {
    render() {
        const {children} = this.props;
        console.log(styles);
        return (
            <div className={styles.Header}>
                {children}
            </div>
        )
    }
}