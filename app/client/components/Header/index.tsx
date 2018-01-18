import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './styles.sass';

export default class Page extends React.Component {
    render() {
        const {children, match} = this.props;
        console.log(this.props);
        return (
            <div className={styles.Header}>
                <NavLink to={`${match.url}`} className={styles.HeaderButton}>
                    Главная
                </NavLink>
                {children}
            </div>
        )
    }
}