import React from 'react';

import {getAlbum} from '../../../api/Api';

export default class AlbumPage extends React.Component {
    state = {
        loading: true,
        album: null
    }

    async componentDidMount() {
        const {match: {params: {album_id}}} = this.props;

        console.log(album_id);

        const album = await getAlbum(album_id);

        this.setState({loading: false, album});
    }

    _toAlbum = (id) => {
        const {history, match} = this.props;

        history.push(`${match.url}/album/${id}`)
    }

    render() {
        const {album, loading} = this.state;

        console.log(album);

        if (loading) return <p>Loading...</p>

        return (
            <div>
                {album.map( el => <img src={el.thumbnailUrl} />                    
                )}
            </div>
        )
    }
}