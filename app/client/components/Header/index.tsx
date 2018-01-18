import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './styles.sass';

export default class Page extends React.Component {
    render() {
        const {children, match, back = null} = this.props;
        console.log(this.props);
        return (
            <div className={styles.Header}>
                <NavLink to={`${match.url}`} className={styles.HeaderButton}>
                    Главная
                </NavLink>
                {back 
                &&  <NavLink to={back} className={styles.HeaderButton}>
                        Назад
                    </NavLink>
                }
                {children}
            </div>
        )
    }
}