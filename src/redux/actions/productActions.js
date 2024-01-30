import axios from 'axios';
import { ActionTypes } from '../actionTypes';

export const setLoading = () => ({
  type: ActionTypes.SET_LOADING,
});

export const setError = (payload) => ({
  type: ActionTypes.SET_ERROR,
  payload,
});

export const setProducts = (payload) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload,
});

/*
    NORMAL FUNCTION
    function  ornekFonksiyon(){
        return async function(dispaytch){
            const data = await axios.get('...');

            dispatch({type:'SET_VERI'})
        }
    }

    ARROW FUNCTION
    const ornekFonksiyon () => async(dispatch) =>{
        const data = await axios.get('...');

        dispatch({type:'SET_VERI'});
    }

*/

export const getProducts = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get('http://localhost:3050/products')
    .then((response) => dispatch(setProducts(response.data)))
    .catch((err) => dispatch(setError(err)));
};
