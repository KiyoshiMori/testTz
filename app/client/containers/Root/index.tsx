import React from 'react';
import {Route, withRouter} from 'react-router';

import Page from '../../components/Page';

import MainPage from '../MainPage';
import UserPage from '../UserPage';
import AlbumPage from '../AlbumPage';

@withRouter
export default class Root extends React.Component {
    render() {
        const {match} = this.props;
        console.log(this.props);

        return (
            <Page>
                <Route exact path={match.url} component={MainPage} />
                <Route exact path={`/user/:id`} component={UserPage} />
                <Route exact path={`/user/:id/album/:id`} component={AlbumPage} />
            </Page>
        )
    }
}