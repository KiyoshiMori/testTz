import React from 'react';

import {getUsers} from '../../../api/Api';

export default class MainPage extends React.Component {
    state = {
        loading: true,
        users: null,
        table: ['Name', 'Username', 'E-mail', 'Website']
    }

    async componentDidMount() {
        const res = await getUsers();

        this.setState({loading: false, users: res});
    }

    _toUser = (id) => {
        const {history, match} = this.props;

        history.push(`/user/${id}`)
    }

    render() {
        const {users, loading, table} = this.state;

        if (loading) return <p>Loading...</p>

        return (
            <table style={{backgroundColor: 'lightgray', width: '900px'}}>
                <tr>
                    {table.map(el => <th>{el}</th>)}
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