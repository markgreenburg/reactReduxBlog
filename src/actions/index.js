export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=echoechoecho';

export const fetchPosts = () => {
  const request = fetch(`${ROOT_URL}/posts${API_KEY}`)
    .then(response => response.json())
    .catch(err => console.log(err));

  return {
    type: FETCH_POSTS,
    payload: request,
  }
}