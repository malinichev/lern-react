import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileIsReadOnly = (state: StateSchema) => state.profile?.readOnly;
