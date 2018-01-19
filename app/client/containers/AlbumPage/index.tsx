import React from 'react';

import Photo from './components/Photo';

import {getAlbum} from '../../../api/Api';

import styles from './styles.sass';

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

    render() {
        const {album, loading} = this.state;

        console.log(album);

        if (loading) return <p>Loading...</p>

        return (
            <div className={styles.Album}>
                {album.map( el => <Photo key={el.id} src={el.thumbnailUrl} title={el.title} />                 
                )}
            </div>
        )
    }
}