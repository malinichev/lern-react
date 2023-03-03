import { LoginSchema } from 'features/AuthByUsername';
import { createSelector } from '@reduxjs/toolkit';
import { getLoginData } from '../getLoginData/getLoginData';

export const getPassword = createSelector(getLoginData, (state:LoginSchema) => state.password);
