import { CounterSchema } from 'entities/Counter';
import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(getCounter, (state:CounterSchema) => state.value);
