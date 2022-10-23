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
        getSongDetails: builder.query({ query : (songId) => `/tracks/details?track_id=${songId}` }),
        getSongRelated : builder.query({ query : (songId) => `/tracks/related?track_id=${songId}` }),
        getArtistDeatils : builder.query({ query : (artistId) => `/artists/details?artist_id=${artistId}`}),

    }),

})


export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDeatilsQuery,


} = shazamCoreApi;