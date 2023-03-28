export { getProfileData } from './model/selectors/getProfileData/getProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';

export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';
