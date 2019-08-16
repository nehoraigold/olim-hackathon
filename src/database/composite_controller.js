import moment from "moment";
import {VALIDATORS} from "./mockdata/benefits";

require('moment');

const TIME_UNITS = {
    "year": 365,
    "month": 30,
};

export function isBenefitValid(user, benefit) {
    let isValid = true;
    let validator = VALIDATORS[benefit.id];
    console.log(benefit.id, validator);
    if (validator) {
        isValid = validator(user);
    }

    return isValid && (!interceptUsedBenefit(user, benefit) && !interceptTimelineRestrictionBenefit(user, benefit) && !interceptAgeRestrictionBenefit(user, benefit))
}

function interceptAgeRestrictionBenefit(user, benefit) {
    let today = moment();
    let dob = moment(user.date_of_birth);

    let userAge = today.year() - dob.year();
    if (today.dayOfYear() < dob.dayOfYear()) {
        userAge--;
    }

    return (benefit.limitations.age) ? userAge > benefit.limitations.age : false;
}

function interceptTimelineRestrictionBenefit(user, benefit) {
    let deadline = benefit.limitations.from_aliyah.deadline;
    if (!deadline || !TIME_UNITS[deadline.unit]) {
        return false;
    }

    let doa = moment(user.date_of_arrival);
    let today = moment();

    let daysLimit = unitsToDays(deadline.unit, deadline.amount);

    return doa.add(daysLimit, 'days').isBefore(today);
}

function unitsToDays(unit, amount) {
    return TIME_UNITS[unit] * amount;
}

function interceptUsedBenefit(user, benefit) {
    if (user.benefits_claimed[benefit.id]) {
        let claimed = user.benefits_claimed[benefit.id].number_claimed;
        let allowed = benefit.limitations.duration.amount;

        return claimed >= allowed;
    } else {
        return false;
    }
}