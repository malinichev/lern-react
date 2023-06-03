export const getQueryParams = (params: OptionalRecord<string, string>) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            newSearchParams.set(name, value);
        }
    });

    return `?${newSearchParams.toString()}`;
};

export const addQueryParams = (params: OptionalRecord<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
