import { PayloadAction } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: CounterSchema = {
    value: 0,
};

// export const CounterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//         },
//         decrement: (state) => {
//             state.value -= 1;
//         },
//     },
// });
//
// export const { actions: counterAction } = CounterSlice;
// export const { reducer: counterReducer } = CounterSlice;

export const CounterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        add: (state, { payload }: PayloadAction<number>) => {
            state.value += payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const {
    actions: counterAction,
    reducer: counterReducer,
    useActions: useCounterActions,
} = CounterSlice;
