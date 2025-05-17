import axios from 'axios';

export const fetchLorem = () => async (dispatch) => {
  dispatch({ type: 'FETCH_LOREM_REQUEST' });

  try {
    const response = await axios.get('https://api.lorem.com/ipsum');
    // assuming the API returns an object with { title, body }
    dispatch({
      type: 'FETCH_LOREM_SUCCESS',
      payload: {
        title: response.data.title,
        body: response.data.body,
      },
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_LOREM_FAILURE',
      payload: error.message,
    });
  }
};
