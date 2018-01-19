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
        const userAvatar = avatar.generate_avatar({"id": user.id, "gender": user.id % 2 == 0 ? "male" : "female"});
        
        return (
            <div className={styles.Container}>
                <div className={styles.leftSide}>
                    <img src={userAvatar} />
                    <p>{user.username}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{`${city} | ${street} | ${suite} | ${zipcode}`}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                    <p>{user.company.name}</p>
                </div>
                <div className={styles.rightSide}>
                    <table className={styles.rightSideTable}>
                    {albums.map(el => {
                        return (
                            <tr key={el.id} onClick={() => this._toAlbum(el.id)}>
                                <td><i className='material-icons'>photo_album</i><p>{el.title}</p><i className='material-icons'>play_arrow</i></td>
                            </tr>
                        )
                    })}
                    </table>
                </div>
            </div>
        )
    }
}