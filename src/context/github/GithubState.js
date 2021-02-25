import React, { useReducer } from "react";
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUsers = async (text) => {
        // console.log(text);
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&CLIENT_ID=${githubClientId}&client_secret=${githubClientSecret}`)
        // console.log(res.data);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })

        // console.log(this.state.users);
    }

    //Get USers
    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?CLIENT_ID=${githubClientId}&client_secret=${githubClientSecret}`)
        // console.log(res.data);
        dispatch(
            {
                type: GET_USER,
                payload: res.data
            }
        )

        // console.log(this.state.users);
    }

    //Get repos
    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&CLIENT_ID=${githubClientId}&client_secret=${githubClientSecret}`)
        // console.log(res.data);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })

        // console.log(this.state.users);
    }

    //clear users
    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }
    //set loading
    const setLoading = () => dispatch({ type: SET_LOADING });


    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;