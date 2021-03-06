import * as types from '../constants/ActionTypes';
import { ARTIST_ALBUMS_URL, ALBUM_URL, ALBUM_TRACKS_URL } from '../constants/ApiConstants';
import { callApi } from '../utils/ApiUtils';

export const fetchAlbumsRequest = () => ({
  type: types.FETCH_ALBUMS_REQUEST,
});

export const fetchAlbumsSuccess = albums => ({
  type: types.FETCH_ALBUMS_SUCCESS,
  albums,
});

export const fetchAlbums = id => async (dispatch) => {
  dispatch(fetchAlbumsRequest());

  const { json } = await callApi(ARTIST_ALBUMS_URL.replace(':id', id));

  dispatch(fetchAlbumsSuccess(json.data || json));
};

export const fetchAlbumRequest = () => ({
  type: types.FETCH_ALBUM_REQUEST,
});

export const fetchAlbumSuccess = album => ({
  type: types.FETCH_ALBUM_SUCCESS,
  album,
});

export const fetchAlbum = id => async (dispatch) => {
  dispatch(fetchAlbumRequest());

  const { json } = await callApi(ALBUM_URL.replace(':id', id));

  dispatch(fetchAlbumSuccess(json.data || json));
};

export const fetchAlbumTracksRequest = () => ({
  type: types.FETCH_ALBUM_TRACKS_REQUEST,
});

export const fetchAlbumTracksSuccess = tracks => ({
  type: types.FETCH_ALBUM_TRACKS_SUCCESS,
  tracks,
});

export const fetchAlbumTracks = id => async (dispatch) => {
  dispatch(fetchAlbumTracksRequest());

  const { json } = await callApi(ALBUM_TRACKS_URL.replace(':id', id));

  dispatch(fetchAlbumTracksSuccess(json.data || json));
};

export const selectAlbum = id => (dispatch) => {
  dispatch(fetchAlbum(id));
  dispatch(fetchAlbumTracks(id));
};
