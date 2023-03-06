import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginData = (state:StateSchema) => state?.login;
