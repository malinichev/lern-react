export { initAuthData } from './model/service/initAuthData';

export { useJsonSettings } from './model/selectors/jsonSettings/jsonSettings';

export { saveJsonSettings } from './model/service/saveJsonSettings';

export { useJsonSettingsKey } from './model/selectors/jsonSettings/jsonSettings';

export { getInitAuthData } from './model/selectors/getInitAuthData/getInitAuthData';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelector/roleSelector';

export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/consts/consts';
