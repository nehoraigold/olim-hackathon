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
    console.log("userBenefits: " + userBenefits);
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
    console.log("allBenefits", allBenefits);
    let validBenefits = [];
    allBenefits.forEach(benefit => {
        console.log("benefit: ", benefit);
        if (allBenefits.hasOwnProperty(benefit)) {
            if (isBenefitValid(user, benefit)) {
                validBenefits.push(benefit);
            }
        }
    });

    return validBenefits;
}

