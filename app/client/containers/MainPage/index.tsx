import React from 'react';

import {getUsers} from '../../../api/Api';

import styles from './styles.sass';

export default class MainPage extends React.Component {
    state = {
        loading: true,
        users: null,
        tableKeys: ['Name', 'Username', 'E-mail', 'Website']
    }

    async componentDidMount() {
        const users = await getUsers();

        this.setState({loading: false, users});
    }

    _toUser = (id) => {
        const {history, match} = this.props;

        history.push(`/user/${id}`)
    }

    render() {
        const {users, loading, tableKeys} = this.state;

        if (loading) return <p>Loading...</p>

        return (
            <table className={styles.Table}>
                <tbody className={styles.Table}>
                    <tr>
                        {tableKeys.map((el, i) => <th key={i}><p>{el}</p></th>)}
                    </tr>
                    {users.map(el => (
                        <tr key={el.id} onClick={() => this._toUser(el.id)}>
                            <td><p>{el.name}</p></td>
                            <td><p>{el.username}</p></td>
                            <td><p>{el.email}</p></td>
                            <td><p>{el.website}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}