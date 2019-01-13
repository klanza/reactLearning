import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('about to fetch posts!');
  await dispatch(fetchPosts());
  // ORIGINAL SOLUTION
  //   const userIds = _.uniq(_.map(getState().posts, 'userId'));
  //   userIds.forEach(id => dispatch(fetchUser(id)));

  // optional lodash refactor below
  // Chain allows to chain methods together, each following chain taking the object
  // returned and pass it as the first argument to the chained method
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
//   CAN'T USE AWAIT WITH FOREACH, ALT METHOD BELOW
//   await Promise.all(userIds.map(id => dispatch(fetchUser(id))))

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// Somewhat complicated solution, hard to understand from a second look
// This is just ONE solution

// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
//   };

// memoize is a lodash function that will help prevent re-doing extra requests

//   const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   });
