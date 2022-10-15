import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8e33cc86b7msh03c44c4ba796e30p1e6a10jsn676f0c2f9c31')
            return headers;
        }

    }),
    endpoints:(builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),

    }),
})


export const {
    useGetTopChartsQuery,
} = shazamCoreApi;