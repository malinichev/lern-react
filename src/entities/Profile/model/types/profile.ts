import { Country, Currency } from 'shared/const/common';

export enum ValidateProfileErrors {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readOnly: boolean;
  validateError?:ValidateProfileErrors[]
}
