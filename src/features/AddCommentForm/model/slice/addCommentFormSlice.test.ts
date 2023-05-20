import { CommentType } from 'features/AddCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test setText, should be return Hello world!', () => {
        const state: DeepPartial<CommentType> = {};
        const text = 'Hello world!';

        expect(addCommentFormReducer(
            state as CommentType,
            addCommentFormActions.setText(text),
        )).toEqual({ text });
    });
});
