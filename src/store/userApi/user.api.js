import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://yuki-anime.onrender.com/auth'
    }),
    endpoints: (builder) => ({
        getMe: builder.mutation({
            query: token => ({
                url: '/getMe',
                method: 'POST',
                body: token
            })
        }),
        login: builder.mutation({
            query: ({login, password}) => ({
                url: '/login',
                method: 'POST',
                body: {login, password}
            })
        }),
        registration: builder.mutation({
            query: ({payload}) => ({
                url: '/registration',
                method: 'POST',
                body: payload
            })
        }),
        updateHistory: builder.mutation({
            query: ({payload}) => ({
                url: '/updateHistory',
                method: 'PATCH',
                body: payload
            })
        }),
        forgetSendMail: builder.mutation({
            query: ({email}) => ({
                url: '/sendReset',
                method: 'POST',
                body: {email}
            })
        }),
        forgetUpdate: builder.mutation({
            query: ({token, password}) => ({
                url: '/reset',
                method: 'POST',
                body: {token, password}
            })
        })
    })
})

export const {
    useGetMeMutation,
    useLoginMutation,
    useRegistrationMutation,
    useUpdateHistoryMutation,
    useForgetSendMailMutation,
    useForgetUpdateMutation
} = userApi