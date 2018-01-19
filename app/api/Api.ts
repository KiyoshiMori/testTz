import rp from 'request-promise-native';
import {API_CORE} from './env';

import {albumResult, albumsResult, userResult} from './ApiScheme';

export function getUsers(userId: string = ''): userResult {
    const options = {
        method: 'GET',
        uri: `${API_CORE}/users/${userId}`,
        json: 'true' 
    }

    try {
        return rp(options)
    } catch(e) {
        console.log('err', e)
    }
}

export function getAlbums(userId: string): albumsResult {
    const options = {
        method: 'GET',
        uri: `${API_CORE}/albums/?userId=${userId}`,
        json: 'true',
        // params: {userId} 
    }

    try {
        return rp(options)
    } catch(e) {
        console.log('err', e)
    }
}

export function getAlbum(albumId: string): albumResult {
    const options = {
        method: 'GET',
        uri: `${API_CORE}/photos/?albumId=${albumId}`,
        json: 'true',
        // params: {albumId} 
    }
    console.log(options)

    try {
        return rp(options)
    } catch(e) {
        console.log('err', e)
    }
}