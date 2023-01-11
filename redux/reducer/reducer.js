import {
	SET_USER,
	REMOVE_USER,
} from "../constants";

const initialState = {
	loggedInUserData: {
		userId: undefined,
		userEmail: undefined,
		userName: undefined,
		userImage: undefined,
		userKey: undefined,
	},
	isUserLoggedIn: false,
	
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				loggedInUserData: {
					userEmail: action.payload.userData.userEmail,
					userId: action.payload.userData.userId,
					userImage: action.payload.userData.userImage,
					userName: action.payload.userData.userName,
					userKey: action.payload.userData.userKey,
				},
				isUserLoggedIn: action.payload.isUserLoggedIn,
			};
		case REMOVE_USER: {
			return {
				...state,
				loggedInUserData: {
					userId: "",
					userName: "",
					userImage: "",
				},
				isUserLoggedIn: false,
			};
		}
		default:
			return state;
	}
};
