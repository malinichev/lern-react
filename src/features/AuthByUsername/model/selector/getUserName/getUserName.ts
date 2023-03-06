import { LoginSchema } from 'features/AuthByUsername';
import { createSelector } from '@reduxjs/toolkit';
import { getLoginData } from 'features/AuthByUsername/model/selector/getLoginData/getLoginData';

export const getUserName = createSelector(getLoginData, (state:LoginSchema) => state?.userName || '');
