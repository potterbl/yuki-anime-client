import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const collectionsApi = createApi({
    reducerPath: 'collectionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://yuki-anime.onrender.com/collections'
    }),
    endpoints: (builder) => ({
        getAllCollections: builder.query({
            query: () => '/'
        }),
        updatePopularity: builder.mutation({
            query: (animeId) => ({
                url: '/updatePopularity',
                method: 'PATCH',
                body: {animeId}
            })
        }),
        getPopular: builder.query({
            query: () => '/popular'
        }),
        getById: builder.query({
            query: (id) => `/id/${id}`
        }),
        getMultiply: builder.mutation({
            query: (collections) => ({
                url: '/multiply',
                method: 'POST',
                body: {collections}
            })
        })
    })
})

export const {
    useGetAllCollectionsQuery,
    useUpdatePopularityMutation,
    useGetPopularQuery ,
    useGetByIdQuery,
    useGetMultiplyMutation
} = collectionsApi