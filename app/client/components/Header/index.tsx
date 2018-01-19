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
                    <p>Главная</p>
                    <i className="material-icons">home</i>
                </NavLink>
                {back 
                &&  <NavLink to={back} className={styles.HeaderButton}>
                        <p>Назад</p>
                        <i className="material-icons">keyboard_arrow_left</i>
                    </NavLink>
                }
                {children}
            </div>
        )
    }
}