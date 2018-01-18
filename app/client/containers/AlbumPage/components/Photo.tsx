import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './styles.sass';

export default class Page extends React.Component {
    render() {
        const {src, title} = this.props;
        return (
            <div className={styles.Photo}>
                <img src={src} />
                <div>{title}</div>
            </div>
        )
    }
}