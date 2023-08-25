import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {userApi} from "./userApi/user.api.js";
import {collectionsApi} from "./collectionApi/collections.api.js";
import {videoApi} from "./videosApi/video.api";

const reducers = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
    [videoApi.reducerPath]: videoApi.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(collectionsApi.middleware)
            .concat(videoApi.middleware)
})

setupListeners(store.dispatch)

