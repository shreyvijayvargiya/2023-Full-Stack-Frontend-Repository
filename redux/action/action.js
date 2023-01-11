import {
	SET_USER,
	REMOVE_USER,
} from "../constants";

export const setUserInStore = (payload) => {
	return async (dispatch) => {
		dispatch({ type: SET_USER, payload: payload });
	};
};

export const removeUserFromStore = () => {
	return async (dispatch) => {
		dispatch({ type: REMOVE_USER });
	};
};
