export function changeHebrewLevel(hebrewLevel) {
	return { type: "HEBREW_LEVEL_CHANGE", hebrewLevel };
}

export function validLicenseFor5Years(bool) {
	return { type: "HAS_VALID_FOREIGN_LICENSE", hasLicense: bool};
}
