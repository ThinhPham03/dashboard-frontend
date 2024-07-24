"use server";

import axios from 'axios';
import { cookies } from 'next/headers'

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const cookieStore = cookies()
        const token = cookieStore.get('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token.value}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;