import {KEY_CATEGORY_DEFAULT, KEY_CATEGORY_DRIVING} from "./categories";

export const KEY_SAL_KLITA = "sal_klita";
export const KEY_TRANSFER_FOREIGN_DRIVER_LICENSE = "transfer_foreign_license";
export const KEY_FOREIGN_DRIVER_LICENSE_VALID = "foreign_license_valid";
export const KEY_EXEMPTION_BUYING_OR_IMPORTING_CAR = "car_purchase_exemptions";

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
        "description": "lorem ipsum",
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
                "other": []
            }
        }
    },
    {
        "id": "foreign_license_valid",
        "name": "foreign driver's license valid",
        "requires_activation": false,
        "category": KEY_CATEGORY_DRIVING,
        "description": "lorem ipsum",
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
        "description": "lorem ipsum",
        "limitations": {
            "age": null,
            "from_aliyah": {
                "deadline": {
                    "amount": 3,
                    "unit": "year"
                },
                "duration": null,
                "other": ["must have valid international & israeli licenses"]
            }
        }
    }
];