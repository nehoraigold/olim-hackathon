export const BENEFITS = {
  "0": {
    "id": 0,
    "name": "sal klita",
    "requires_activation": true,
    "category": "default",
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
  "1": {
    "id": 1,
    "name": "foreign license transfer",
    "requires_activation": true,
    "category": "driving",
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
  "2": {
    "id": 2,
    "name": "foreign_license_valid",
    "requires_activation": false,
    "category": "driving",
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
  }
};