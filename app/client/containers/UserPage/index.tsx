import React from 'react';

import {getUsers, getAlbums} from '../../../api/Api';

export default class MainPage extends React.Component {
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

        console.log(albums);

        if (loading) return <p>Loading...</p>

        return (
            <div>
                <div>
                    {user.name}
                </div>
                <div>
                    {albums.map(el => {
                        return <div onClick={() => this._toAlbum(el.id)}>{el.title}</div>
                    })}
                </div>
            </div>
        )
    }
}