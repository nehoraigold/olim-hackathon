import { getUserProfile } from "../database/user_controller";
import init from "../database/controller";
import { getRelevantBenefits } from "../database/benefit_controller";

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
