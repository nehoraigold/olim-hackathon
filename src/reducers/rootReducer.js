import { getUserProfile } from "../database/user_controller";
import init from "../database/controller";
import { getRelevantBenefits } from "../database/benefit_controller";

init();

const initialState = {
	user: getUserProfile(),
	benefits: getRelevantBenefits(getUserProfile())
};

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case "HAS_VALID_FOREIGN_LICENSE":
			let newState = Object.assign({}, state);
			newState.user.foreign_drivers_license = action.hasLicense;
			newState.benefits = getRelevantBenefits(newState.user);
			window.localStorage.users = newState.user;
			console.log(newState);
			return newState;
		default:
			return state;
	}
};
