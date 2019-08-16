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
    for (const benefit of userBenefits) {
        if (benefit.category === category.id) {
            relevantBenefits.push(benefit);
        }
    }
    return relevantBenefits;
}

export function getRelevantBenefits(user) {
    let allBenefits = getAllBenefits();
    let validBenefits = [];

    for (let benefit in allBenefits) {
        if (allBenefits.hasOwnProperty(benefit)) {
            if (isBenefitValid(user, benefit)) {
                validBenefits.push(benefit);
            }
        }
    }
    return validBenefits;
}

