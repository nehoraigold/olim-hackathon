import moment from "moment";

require('moment');

const TIME_UNITS = {
    "year": 365,
    "month": 30,
};

export function isBenefitValid(user, benefit) {
    return (!interceptUsedBenefit(user, benefit) && !interceptTimelineRestrictionBenefit(user, benefit) && !interceptAgeRestrictionBenefit(user, benefit))
}

function interceptAgeRestrictionBenefit(user, benefit) {
    let today = moment();
    let dob = moment(user.date_of_birth);

    let userAge = today.year() - dob.year();
    if (today.dayOfYear() < dob.dayOfYear()) {
        userAge--;
    }

    let valid = (benefit.limitations.age) ? userAge > benefit.limitations.age : false;
    console.log(benefit.name + "age disqualified: " + valid);
    return valid;
}

function interceptTimelineRestrictionBenefit(user, benefit) {
    console.log("user = ", user);
    console.log("benefit = ", benefit);
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