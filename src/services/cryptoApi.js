import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '830407d373mshf5e8e237da82bf1p16ba73jsndc2d0c8690f9'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';

const createRequest = url => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})