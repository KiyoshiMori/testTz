import React from 'react';
import avatar from 'cartoon-avatar';

import {getUsers, getAlbums} from '../../../api/Api';

import styles from './styles.sass';

export default class UserPage extends React.Component {
    state = {
        loading: true,
        user: null,
        albums: null
    }

    async componentDidMount() {
        const {match: {params: {id}}} = this.props;

        console.log(this.props, 'props in user');

        const user = await getUsers(id);
        const albums = await getAlbums(id);

        this.setState({loading: false, user, albums});
    }

    _toAlbum = (id) => {
        const {history, match} = this.props;

        history.push(`${match.url}/album/${id}`)
    }

    render() {
        const {user, albums, loading} = this.state;

        console.log(albums, user);

        if (loading) return <p>Loading...</p>

        const {city, street, suite, zipcode} = user.address;

        return (
            <div className={styles.Container}>
                <div className={styles.leftSide}>
                    <img src={avatar.generate_avatar({"id": user.id, "gender": user.id % 2 == 0 ? "male" : "female"})} />
                    {user.username}
                    {user.name}
                    {user.email}
                    {`${city} | ${street} | ${suite} | ${zipcode}`}
                </div>
                <div className={styles.rightSide}>
                    {albums.map(el => {
                        return <div onClick={() => this._toAlbum(el.id)}>{el.title}</div>
                    })}
                </div>
            </div>
        )
    }
}