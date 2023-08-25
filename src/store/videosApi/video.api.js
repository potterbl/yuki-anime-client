import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
    reducerPath: 'videoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://yuki-anime.onrender.com/videos'
    }),
    endpoints: (builder) => ({
        getVideo: builder.mutation({
            query: ({animeId, season, episode}) => ({
                url: '/getOne',
                method: 'POST',
                body: {animeId, season, episode}
            })
        })
    })
})

export const {
    useGetVideoMutation
} = videoApi