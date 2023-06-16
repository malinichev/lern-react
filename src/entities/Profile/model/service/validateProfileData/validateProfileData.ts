import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (data?:Profile) => {
    if (!data) {
        return [ValidateProfileErrors.NO_DATA];
    }

    const {
        firstname, lastname, age, country,
    } = data;

    const error:ValidateProfileErrors[] = [];

    if (!firstname || !lastname) {
        error.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        error.push(ValidateProfileErrors.INCORRECT_USER_AGE);
    }

    if (!country) {
        error.push(ValidateProfileErrors.INCORRECT_USER_COUNTRY);
    }
    return error;
};
