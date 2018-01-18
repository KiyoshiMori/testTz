import React from 'react';
import {Route, withRouter} from 'react-router';

import Page from '../../components/Page';
import Header from '../../components/Header';

import MainPage from '../MainPage';
import UserPage from '../UserPage';
import AlbumPage from '../AlbumPage';

// import styles from '../../styles/global.css';

@withRouter
export default class Root extends React.Component {
    render() {
        const {match, history} = this.props;

        return [
            <Page match={match} history={history}>
                <Route exact path={match.url} component={MainPage} />
                <Route exact path={`/user/:id`} component={UserPage} />
                <Route exact path={`/user/:id/album/:album_id`} component={AlbumPage} />
            </Page>
        ]
    }
}