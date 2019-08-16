import init, { getUserProfile } from "../database/controller";

init();
const initialState = getUserProfile();

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};


