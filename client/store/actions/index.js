import * as actionTypes from "./actionTypes";

export const fetchUsers = pageNum => async (dispatch, getState, api) => {
	const collection = await api.get(`/users?page=${pageNum}`);
	dispatch({
		type: actionTypes.FETCH_USERS,
		payload: collection.data
	});
};
export const fetchAdmins = () => async (dispatch, getState, api) => {
	const Admins = await api.get("/admins");
	dispatch({
		type: actionTypes.FETCH_ADMINS,
		payload: Admins.data
	});
};
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
	const User = await api.get("/current_user");
	dispatch({
		type: actionTypes.FETCH_CURRENT_USER,
		payload: User.data
	});
};
