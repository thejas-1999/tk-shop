import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../src/constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const appSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({})
});
