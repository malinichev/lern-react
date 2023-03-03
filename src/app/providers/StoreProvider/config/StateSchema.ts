import type { CounterSchema } from 'entities/Counter';
import type { LoginSchema } from 'features/AuthByUsername';
import type { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema
    login: LoginSchema
    user: UserSchema
}
