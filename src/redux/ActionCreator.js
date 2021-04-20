import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
//Example for redux thunk,a function is going to return a inner function which has access to dispatch and getState methods of redux
export const fetchDishes = () => (dispatch) => {
  //two actions
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};
//Creating Actions
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmsg) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmsg,
});
