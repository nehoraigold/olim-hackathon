import {getAll, getObject} from "./controller";
import {isBenefitValid} from "./composite_controller";

const TABLE = "benefits";

export function getBenefit(id) {
    return getObject(TABLE, id);
}

export function getAllBenefits() {
    return getAll(TABLE)
}

export function getRelevantBenefitsByCategory(user, category) {
    let userBenefits = getRelevantBenefits(user);
    let relevantBenefits = [];
    for (const benefit in userBenefits) {
        if (userBenefits.hasOwnProperty(benefit)) {
            if (benefit.category === category.id) {
                relevantBenefits.push(benefit);
            }
        }
    }
    return relevantBenefits;
}

export function getRelevantBenefits(user) {
    const allBenefits = getAllBenefits();
    let validBenefits = [];
    allBenefits.forEach(benefit => {
        if (isBenefitValid(user, benefit)) {
            console.log(benefit.name, "valid");
            validBenefits.push(benefit);
        } else {
            console.log(benefit.name, "not valid");
        }
    });

    return validBenefits;
}

