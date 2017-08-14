import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'show_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=echoechoecho';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  }
};

export const createPost = (values, callback) => {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback())
    .catch((error) => console.log(error));
  
  return {
    type: CREATE_POST,
    payload: request,
  }
};

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  }
}

export const deletePost = (id, callback) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)
    .then(() => callback())
    .catch((error) => console.log(error));
  
  return {
    type: DELTE_POST,
    payload: id,
  }
};
