import { LoginSchema } from 'features/AuthByUsername';
import { createSelector } from '@reduxjs/toolkit';
import { getLoginData } from '../getLoginData/getLoginData';

export const getIsLoading = createSelector(getLoginData, (state:LoginSchema) => state?.isLoading);
