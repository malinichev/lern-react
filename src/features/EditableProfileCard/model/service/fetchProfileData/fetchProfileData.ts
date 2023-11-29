import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (userId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
                const response = await extra.api.get<Profile>(`/profile/${userId}`, {
                    headers: {
                        authorization,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
