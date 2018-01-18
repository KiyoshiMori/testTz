import React from 'react';

import Header from '../Header';

import styles from './styles.sass';

export default class Page extends React.Component {
    render() {
        const {children, match, history} = this.props;

        const loc = history.location.pathname.split('/');
        const backTo = loc.includes('album') ? `/${loc[1]}/${loc[2]}` : `/`;

        return (
            <div className={styles.Page}>
                <Header match={match} back={loc.length > 2 && backTo}/>
                <div className={styles.PageContent}>
                    {children}
                </div>
            </div>
        )
    }
}