import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../api/userApi';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (newJsonSettings, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;
        const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userData) {
            return rejectWithValue('');
        }

        try {
            const userId = JSON.parse(userData);
            const response = await dispatch(
                getUserDataByIdQuery(userId.id),
            ).unwrap();

            if (!response) {
                return rejectWithValue('');
            }

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
