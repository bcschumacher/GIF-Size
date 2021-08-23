import request from 'superagent';

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const INCREASE_OFFSET = 'INCREASE_OFFSET';
export const OPEN_MODAL = 'OPEN_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
export const REQUEST_MORE = 'REQUEST_MORE';
export const SET_TERM = 'SET_TERM';

const API_URL_SEARCH = 'http://api.giphy.com/v1/gifs/search?q=';
const API_URL_TRENDING = 'https://api.giphy.com/v1/gifs/search?q=funny';
const API_KEY = '&api_key=HtZIFrqL7IuwqUgP8na9DYlKcp85DrwH';
const RATING = '&rating=R';

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function increaseOffset() {
    return {
        type: INCREASE_OFFSET
    }
}

export function openModal(gif) {
    return {
        type: OPEN_MODAL,
        gif
    }
}

export function requestGifs(term = null) {
    let data = "";
    if(!term) {
        data = request.get(`${API_URL_TRENDING}${API_KEY}&limit=100`);
        return {
            type: REQUEST_GIFS,
            payload: data
        }
    } else {
        data = request.get(`${API_URL_SEARCH}${term.replace(/\s/g, '+')}${API_KEY}${RATING}&limit=100`);
        return {
            type: REQUEST_GIFS,
            payload: data
        }
    }
}

export function requestMore(term = null, offset) {
    let data = "";
    if(!term) {
        data = request.get(`${API_URL_TRENDING}${API_KEY}&limit=100&offset=${offset}`);
        return {
            type: REQUEST_MORE,
            payload: data
        }
    } else {
        data = request.get(`${API_URL_SEARCH}${term.replace(/\s/g, '+')}${API_KEY}${RATING}&limit=100&offset=${offset}`);
        return {
            type: REQUEST_MORE,
            payload: data
        }
    }
}

export function setTerm(term = null) {
    return {
        type: SET_TERM,
        term: term
    }
}