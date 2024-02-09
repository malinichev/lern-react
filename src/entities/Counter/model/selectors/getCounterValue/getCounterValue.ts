import { buildSelector } from '@/shared/lib/store';

// export const getCounterValue = createSelector(getCounter, (state:CounterSchema) => state.value);
export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
