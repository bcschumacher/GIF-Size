import request from 'superagent';

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const INCREASE_OFFSET = 'INCREASE_OFFSET';
export const OPEN_MODAL = 'OPEN_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
export const REQUEST_MORE = 'REQUEST_MORE';
export const SET_TERM = 'SET_TERM';

// GIPHY API Constants
const API_URL_SEARCH = 'http://api.giphy.com/v1/gifs/search?q=';
const API_URL_TRENDING = 'https://api.giphy.com/v1/gifs/search?q=funny';
const API_KEY = '&api_key=HtZIFrqL7IuwqUgP8na9DYlKcp85DrwH';
const RATING = '&rating=R';

// Action to close an open modal
export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

// Action to increase the GIF offset so that new GIFs are added to the list
export function increaseOffset() {
    return {
        type: INCREASE_OFFSET
    }
}

// Action to open a modal
export function openModal(gif) {
    return {
        type: OPEN_MODAL,
        gif
    }
}

// Action to request GIFs from the GIPHY API 
// Uses the middware SuperAgent to make the API all
export function requestGifs(term = null) {
    let data = "";
    // If term is empty, then request generic funny GIFs 
    if(!term) {
        data = request.get(`${API_URL_TRENDING}${API_KEY}&limit=100`);
        return {
            type: REQUEST_GIFS,
            payload: data
        }
    // Else use term to search a specific topic
    } else {
        data = request.get(`${API_URL_SEARCH}${term.replace(/\s/g, '+')}${API_KEY}${RATING}&limit=100`);
        return {
            type: REQUEST_GIFS,
            payload: data
        }
    }
}

// Action to request more GIFs after the initial request
// This action is called on scroll
export function requestMore(term = null, offset) {
    let data = "";
    // If term is empty, then request generic funny GIFs 
    if(!term) {
        data = request.get(`${API_URL_TRENDING}${API_KEY}&limit=100&offset=${offset}`);
        return {
            type: REQUEST_MORE,
            payload: data
        }
    } else {
        // Else use term to search a specific topic
        data = request.get(`${API_URL_SEARCH}${term.replace(/\s/g, '+')}${API_KEY}${RATING}&limit=100&offset=${offset}`);
        return {
            type: REQUEST_MORE,
            payload: data
        }
    }
}

// Action to record the current search term
export function setTerm(term = null) {
    return {
        type: SET_TERM,
        term: term
    }
}