import React from 'react';

import Header from '../Header';

import styles from './styles.sass';

export default class Page extends React.Component {
    render() {
        const {children} = this.props;
        console.log(styles);
        return (
            <div className={styles.Page}>
                <Header />
                <div className={styles.PageContent}>
                    {children}
                </div>
            </div>
        )
    }
}