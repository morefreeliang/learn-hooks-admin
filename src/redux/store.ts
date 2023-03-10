import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = { key: "persist-config", storage }
const persistOfReducer= persistReducer(persistConfig,counterReducer);
export const store =  configureStore({
    reducer: {
        counter:persistOfReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false}),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
