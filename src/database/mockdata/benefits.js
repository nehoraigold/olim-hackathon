import {KEY_CATEGORY_DEFAULT, KEY_CATEGORY_DRIVING} from "./categories";

export const KEY_SAL_KLITA = "sal_klita";
export const KEY_TRANSFER_FOREIGN_DRIVER_LICENSE = "transfer_foreign_license";
export const KEY_FOREIGN_DRIVER_LICENSE_VALID = "foreign_license_valid";
export const KEY_EXEMPTION_BUYING_OR_IMPORTING_CAR = "car_purchase_exemptions";

export const VALIDATORS = {
    "foreign_license_valid": (user) => {
        return !user.israeli_drivers_license;
    },
    "transfer_foreign_license": (user) => {
        console.log("should be able to transfer: " + !user.israeli_drivers_license && user.foreign_drivers_license);
        return !user.israeli_drivers_license && user.foreign_drivers_license;
    },
    "ulpan_hebrew_lessons": (user) => {
        return user.hebrew_level < 4;
    }
};

export const BENEFITS = [
    {
        "id": "sal_klita",
        "name": "sal klita monthly stipend",
        "requires_activation": true,
        "category": KEY_CATEGORY_DEFAULT,
        "description": "lorem ipsum",
        "limitations": {
            "age": null,
            "from_aliyah": {
                "deadline": {
                    "amount": 1,
                    "unit": "year"
                },
                "duration": {
                    "amount": 6,
                    "unit": "month"
                },
                "other": []
            }
        },
        "frequency": {
            "amount": 1,
            "per": "month",
            "number": 6
        }
    },
    {
        "id": "transfer_foreign_license",
        "name": "transfer foreign driver's license to an Israeli license",
        "requires_activation": true,
        "category": KEY_CATEGORY_DRIVING,
        "description": "Olim who hold a valid driver's license in their country of origin are eligible to transfer their license over to an Israeli license.",
        "limitations": {
            "age": null,
            "from_aliyah": {
                "deadline": {
                    "amount": 5,
                    "unit": "year"
                },
                "duration": {
                    "amount": 1,
                    "unit": "life"
                },
                "other": [
                    "Within 5 years of Aliyah, according to the date found on the Oleh’s Teudat Oleh or Teudat Zakaut.",
                    "Proof of 5 years of consecutive driving on a full foreign license that was issued prior to your date of Aliyah (not probationary or temporary).",
                    "The Misrad HaRishui must see proof of the Date of Issue for your license (which proves 5 years of consecutive driving immediately preceding your Aliyah date). ",
                    "The 5 years of consecutive driving history must be for the 5 years immediately preceding your date of Aliyah.",
                    "Failed no more than one conversion test (Olim who have failed the conversion test twice must take a practical driving exam)",
                    "Olim who are 70, or over or will be turning 70, must undergo the eye exam and doctor’s exam and present this form with their renewal documents."
                ]
            }
        }
    },
    {
        "id": "foreign_license_valid",
        "name": "foreign driver's license valid",
        "requires_activation": false,
        "category": KEY_CATEGORY_DRIVING,
        "description": "Olim are allowed to drive using their foreign-issued driver's licenses for up to one year after making Aliyah",
        "limitations": {
            "age": null,
            "from_aliyah": {
                "deadline": {
                    "amount": 1,
                    "unit": "year"
                },
                "duration": null,
                "other": []
            }
        }
    },
    {
        "id": "car_purchase_exemptions",
        "name": "tax exemptions relating to cars",
        "requires_activation": true,
        "category": KEY_CATEGORY_DRIVING,
        "description": "Olim pay a reduced tax rate on the purchase of a new car in Israel or the import of a car from abroad.",
        "limitations": {
            "age": null,
            "from_aliyah": {
                "deadline": {
                    "amount": 3,
                    "unit": "year"
                },
                "duration": null,
                "other": [
                    "Available up to 3 years after Aliyah",
                    ""
                ]
            }
        }
    },
    {
        "id": "ulpan_hebrew_lessons"
    }
];