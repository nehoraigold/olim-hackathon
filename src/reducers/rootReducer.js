import { getUserProfile } from "../database/user_controller";
import init from "../database/controller";
import { getRelevantBenefits } from "../database/benefit_controller";

init();

console.log(getUserProfile());

const initialState = {
	user: JSON.parse(window.localStorage.users)["0"],
	benefits: {}
};

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
