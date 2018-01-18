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
                <tr>
                    {tableKeys.map(el => <th>{el}</th>)}
                </tr>
                {users.map(el => (
                    <tr onClick={() => this._toUser(el.id)}>
                        <td>{el.name}</td>
                        <td>{el.username}</td>
                        <td>{el.email}</td>
                        <td>{el.website}</td>
                    </tr>
                ))}
            </table>
        )
    }
}