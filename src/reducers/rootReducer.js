import init, { getUserProfile } from "../database/controller";

init();

const initialState = {
	user: getUserProfile(),
	benefits: {}
};

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};


