import { GET_TWEETS } from "./actionTypes";
import axios from "axios";


export const getTweets = () => async (dispatch) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  dispatch({
    type: GET_TWEETS,
    payload: res.data,
  });
}