import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('shared/lib/url/addQueryParams', () => {
    test('test one param', () => {
        const param = getQueryParams({
            test: 'value',
        });
        expect(param).toBe('?test=value');
    });
    test('test multiple param', () => {
        const param = getQueryParams({
            test: 'value',
            test2: 'value2',
        });
        expect(param).toBe('?test=value&test2=value2');
    });
    test('test with undefined param', () => {
        const param = getQueryParams({
            test: 'value',
            test2: undefined,
        });
        expect(param).toBe('?test=value');
    });
});
